import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg text-text-primary flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-[0_0_24px_rgba(1,216,180,0.2)]">
            <span className="font-mono text-lg font-bold">!</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            Something went wrong
          </h1>
          <p className="text-text-muted text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
            An unexpected error occurred while loading this view. You can reload the page or return to the home page.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-xl bg-primary text-black font-semibold text-xs tracking-wider uppercase hover:bg-hover-primary transition-all shadow-[0_0_16px_rgba(1,216,180,0.3)] cursor-pointer"
            >
              Reload Page
            </button>
            <a
              href="/"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/40 text-text-muted hover:text-white font-mono text-xs tracking-wider uppercase transition-all"
            >
              Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

