
import React from "react";
import { cn } from "@/lib/utils";

interface EnhancedBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "danger" | "info" | "fancy";
  size?: "xs" | "sm" | "md" | "lg";
  rounded?: "default" | "full" | "md" | "lg";
  withDot?: boolean;
  dotColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
}

export const EnhancedBadge = React.forwardRef<HTMLSpanElement, EnhancedBadgeProps>(
  ({
    className,
    variant = "default",
    size = "md",
    rounded = "full",
    withDot = false,
    dotColor = "default",
    children,
    ...props
  }, ref) => {
    // Variant classes
    const variantClasses = {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-tamtam-orange-100 text-tamtam-orange-800",
      secondary: "bg-tamtam-green/10 text-tamtam-green-800",
      outline: "bg-transparent border border-gray-300 text-gray-700",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-blue-100 text-blue-800",
      fancy: "bg-gradient-to-r from-tamtam-orange-50 to-tamtam-orange-100 text-tamtam-orange-700 border border-tamtam-orange-200"
    };

    // Size classes
    const sizeClasses = {
      xs: "text-xs px-2 py-0.5",
      sm: "text-xs px-2.5 py-0.5",
      md: "text-sm px-3 py-1",
      lg: "text-base px-4 py-1.5"
    };

    // Rounded classes
    const roundedClasses = {
      default: "rounded",
      full: "rounded-full",
      md: "rounded-md",
      lg: "rounded-lg"
    };

    // Dot color classes
    const dotColorClasses = {
      default: "bg-gray-500",
      primary: "bg-tamtam-orange-500",
      secondary: "bg-tamtam-green",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500",
      info: "bg-blue-500"
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 font-medium",
          variantClasses[variant],
          sizeClasses[size],
          roundedClasses[rounded],
          className
        )}
        {...props}
      >
        {withDot && (
          <span className={cn(
            "w-1.5 h-1.5 rounded-full", 
            dotColorClasses[dotColor]
          )} />
        )}
        {children}
      </span>
    );
  }
);
EnhancedBadge.displayName = "EnhancedBadge";

// Export a premium badge variant that's commonly used in the application
export const PremiumBadge = ({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <EnhancedBadge 
    variant="fancy" 
    className={cn(
      "border border-tamtam-orange-200/50 font-montserrat font-medium",
      className
    )}
    {...props}
  >
    {children || "Premium"}
  </EnhancedBadge>
);

// Export a status badge with dot indicator
export const StatusBadge = ({ 
  status, 
  children, 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLSpanElement> & { 
  status: "active" | "pending" | "cancelled" | "completed" | "processing" 
}) => {
  const statusConfig = {
    active: { variant: "success" as const, dotColor: "success" as const },
    pending: { variant: "warning" as const, dotColor: "warning" as const },
    cancelled: { variant: "danger" as const, dotColor: "danger" as const },
    completed: { variant: "primary" as const, dotColor: "primary" as const },
    processing: { variant: "info" as const, dotColor: "info" as const },
  };

  const statusText = {
    active: "Active",
    pending: "Pending",
    cancelled: "Cancelled",
    completed: "Completed",
    processing: "Processing",
  };

  const config = statusConfig[status];

  return (
    <EnhancedBadge
      variant={config.variant}
      withDot={true}
      dotColor={config.dotColor}
      className={className}
      {...props}
    >
      {children || statusText[status]}
    </EnhancedBadge>
  );
};

// Menu badge that's used on the menu page for food categories, preferences, etc.
export const MenuBadge = ({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <EnhancedBadge
    variant="outline"
    size="sm"
    className={cn(
      "bg-white/90 shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </EnhancedBadge>
);

// Category badge used across the site
export const CategoryBadge = ({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <EnhancedBadge
    variant="secondary"
    className={cn(
      "uppercase tracking-wide text-xs",
      className
    )}
    {...props}
  >
    {children}
  </EnhancedBadge>
);
