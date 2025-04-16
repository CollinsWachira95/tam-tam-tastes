
import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  withReturnHome?: boolean;
  withBackButton?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    const { onReset } = this.props;
    
    this.setState({ 
      hasError: false, 
      error: null,
      errorInfo: null 
    });
    
    if (onReset) {
      onReset();
    }
  };

  public render() {
    const { hasError, error } = this.state;
    const { children, fallback, withReturnHome, withBackButton } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }
      
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center rounded-lg border border-red-200 bg-red-50 animate-fade-in">
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h2>
          <p className="text-red-600 mb-6 max-w-md">
            {error?.message || "An unexpected error occurred while rendering this component."}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              variant="outline"
              onClick={this.handleReset}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Try Again
            </Button>
            
            {withBackButton && (
              <Button 
                variant="outline"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Go Back
              </Button>
            )}
            
            {withReturnHome && (
              <Button 
                as={Link}
                to="/"
                variant="outline"
                className="flex items-center gap-2"
              >
                <Home className="h-4 w-4" /> Return Home
              </Button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorFallback({ 
  error, 
  resetErrorBoundary, 
  withReturnHome = true,
  withBackButton = true,
}: { 
  error: Error;
  resetErrorBoundary: () => void;
  withReturnHome?: boolean;
  withBackButton?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 text-center rounded-lg border border-red-200 bg-red-50 animate-fade-in">
      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-red-700 mb-2">Something went wrong</h2>
      <p className="text-red-600 mb-6 max-w-md">
        {error?.message || "An unexpected error occurred while rendering this component."}
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          variant="outline"
          onClick={resetErrorBoundary}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" /> Try Again
        </Button>
        
        {withBackButton && (
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </Button>
        )}
        
        {withReturnHome && (
          <Link to="/">
            <Button 
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" /> Return Home
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

// Component for inline error messages
export function InlineError({ message, className }: { message: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-red-600 text-sm mt-1", className)}>
      <AlertCircle className="h-4 w-4" /> 
      <span>{message}</span>
    </div>
  );
}

// Helper function to combine classNames
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
