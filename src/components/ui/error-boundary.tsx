
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-red-50 p-4 rounded-full mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            {this.state.error?.message || "An unexpected error occurred"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Refresh page
            </Button>
            <Button 
              variant="outline"
              asChild
              className="flex items-center gap-2"
            >
              <Link to="/">Return to home</Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function InlineError({ message }: { message: string }) {
  return (
    <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
      <AlertTriangle className="h-3 w-3" />
      <span>{message}</span>
    </div>
  );
}
