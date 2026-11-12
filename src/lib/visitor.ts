export interface VisitorResponse {
  success: boolean;
  uniqueVisitors: number | null;
  isNew?: boolean;
  message?: string;
}

let inFlightPromise: Promise<VisitorResponse | null> | null = null;
let cachedResult: VisitorResponse | null = null;

export async function recordVisitor(): Promise<VisitorResponse | null> {
  if (cachedResult && cachedResult.success && typeof cachedResult.uniqueVisitors === "number") {
    return cachedResult;
  }

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
      return null;
    } finally {
      inFlightPromise = null;
    }
  })();

  return inFlightPromise;
}

