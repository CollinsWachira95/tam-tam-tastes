
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  color?: "default" | "primary" | "secondary" | "white";
}

export function Spinner({ 
  size = "md", 
  className,
  color = "default"
}: SpinnerProps) {
  const sizeClasses = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
    "2xl": "h-16 w-16",
  };

  const colorClasses = {
    default: "text-gray-600",
    primary: "text-tamtam-orange-600",
    secondary: "text-tamtam-green",
    white: "text-white",
  };

  return (
    <Loader2 
      className={cn(
        `animate-spin ${sizeClasses[size]} ${colorClasses[color]}`,
        className
      )} 
      aria-hidden="true"
    />
  );
}

export function FullPageSpinner({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <Spinner size="xl" color="primary" />
      {message && (
        <p className="mt-4 text-base font-medium text-tamtam-gray-600 animate-fade-in">
          {message}
        </p>
      )}
    </div>
  );
}

export function LoadingOverlay({ 
  message,
  className 
}: { 
  message?: string;
  className?: string;
}) {
  return (
    <div className={cn(
      "absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[2px] z-10 rounded-lg",
      className
    )}>
      <Spinner size="lg" color="primary" className="mb-3" />
      {message && (
        <p className="text-sm text-muted-foreground max-w-xs text-center px-4">
          {message}
        </p>
      )}
    </div>
  );
}

// Enhanced inline spinner for buttons and other elements
export function ButtonSpinner({ className }: { className?: string }) {
  return <Spinner size="xs" className={cn("mr-2", className)} />;
}

// Enhanced section loading overlay
export function SectionLoading({
  message,
  height = "md",
}: {
  message?: string;
  height?: "sm" | "md" | "lg";
}) {
  const heightClasses = {
    sm: "min-h-[150px]",
    md: "min-h-[250px]",
    lg: "min-h-[350px]",
  };

  return (
    <div className={cn("w-full flex flex-col items-center justify-center", heightClasses[height])}>
      <Spinner size="lg" color="primary" />
      {message && (
        <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
}
