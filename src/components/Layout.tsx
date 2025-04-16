
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ui/error-boundary";

interface LayoutProps {
  children: ReactNode;
  withFullHeight?: boolean;
  withPadding?: boolean;
  withErrorBoundary?: boolean;
}

export default function Layout({
  children,
  withFullHeight = true,
  withPadding = true,
  withErrorBoundary = true,
}: LayoutProps) {
  const content = (
    <div className={cn(
      "w-full",
      withFullHeight && "min-h-screen flex flex-col",
      withPadding && "pt-16 md:pt-20" // Adjust based on your navbar height
    )}>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );

  if (withErrorBoundary) {
    return (
      <ErrorBoundary>
        {content}
      </ErrorBoundary>
    );
  }

  return content;
}

// Helper function to combine class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// PageSection component for consistent section styling
interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "cream" | "pattern" | "gradient";
  container?: boolean;
  spacing?: "sm" | "md" | "lg" | "xl";
}

export function PageSection({
  children,
  className,
  background = "white",
  container = true,
  spacing = "lg",
}: PageSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-tamtam-light",
    cream: "bg-tamtam-cream",
    pattern: "bg-white kenyan-pattern",
    gradient: "bg-gradient-to-r from-tamtam-orange-50 to-tamtam-cream",
  };

  const spacingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-20 md:py-32",
  };

  return (
    <section className={cn(
      "relative overflow-hidden",
      backgroundClasses[background],
      spacingClasses[spacing],
      className
    )}>
      {container ? (
        <div className="container-custom relative z-10">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

// PageHeader component for consistent page headers
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg" | "xl";
}

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  className,
  align = "left",
  titleSize = "lg",
}: PageHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const titleSizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  return (
    <div className={cn(
      "max-w-3xl mb-12",
      alignClasses[align],
      className
    )}>
      {badge && (
        <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-5">
          {badge}
        </span>
      )}
      
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-tamtam-gray-800 mb-2">
          {subtitle}
        </h2>
      )}
      
      <h1 className={cn(
        "font-bold mb-6 text-tamtam-black leading-tight tracking-tight",
        titleSizeClasses[titleSize]
      )}>
        {title}
      </h1>
      
      {description && (
        <>
          <div className="h-1 w-24 bg-tamtam-orange rounded-full my-6"></div>
          <p className="text-tamtam-gray text-lg leading-relaxed">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
