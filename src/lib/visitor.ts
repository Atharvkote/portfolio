export interface VisitorResponse {
  success: boolean;
  uniqueVisitors: number | null;
  isNew?: boolean;
  message?: string;
}

// In-memory cache and in-flight promise reference to prevent duplicate calls from React StrictMode & re-renders
let inFlightPromise: Promise<VisitorResponse | null> | null = null;
let cachedResult: VisitorResponse | null = null;

/**
 * Register visitor identity and fetch lifetime unique visitor count.
 * Deduplicates in-flight requests and avoids duplicate increments.
 */
export async function recordVisitor(): Promise<VisitorResponse | null> {
  // Return cached result if already resolved in this browser session
  if (cachedResult && cachedResult.success && typeof cachedResult.uniqueVisitors === "number") {
    return cachedResult;
  }

  // If a request is already in-flight (e.g. React StrictMode concurrent mount), reuse the existing promise
  if (inFlightPromise) {
    return inFlightPromise;
  }

  inFlightPromise = (async () => {
    try {
      const response = await fetch("/api/visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        return null;
      }

      const data: unknown = await response.json();
      if (
        data &&
        typeof data === "object" &&
        "success" in data &&
        "uniqueVisitors" in data &&
        typeof (data as VisitorResponse).uniqueVisitors === "number"
      ) {
        cachedResult = data as VisitorResponse;
        return cachedResult;
      }

      return null;
    } catch {
      // Graceful network error handling: never break the portfolio if the API is unreachable
      return null;
    } finally {
      inFlightPromise = null;
    }
  })();

  return inFlightPromise;
}

