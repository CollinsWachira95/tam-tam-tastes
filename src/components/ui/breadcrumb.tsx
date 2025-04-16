
import * as React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
  current?: boolean;
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, href, current = false, children, ...props }, ref) => {
    const Comp = href ? Link : "span";
    return (
      <li
        ref={ref}
        className={cn("inline-flex items-center", className)}
        {...props}
      >
        {href ? (
          <Link
            to={href}
            className={cn(
              "text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
              current ? "text-tamtam-orange-600 font-semibold pointer-events-none" : "text-muted-foreground"
            )}
          >
            {children}
          </Link>
        ) : (
          <span
            className={cn(
              "text-sm font-medium",
              current ? "text-tamtam-orange-600 font-semibold" : "text-muted-foreground"
            )}
          >
            {children}
          </span>
        )}
      </li>
    );
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  isRoot?: boolean;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator = <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/70" />, isRoot = false, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const enhancedChildren = childrenArray.map((child, index) => {
      if (React.isValidElement(child) && child.type === BreadcrumbItem) {
        return React.cloneElement(child, {
          current: index === childrenArray.length - 1,
          key: index,
        });
      }
      return child;
    });

    return (
      <nav
        ref={ref}
        className={cn("flex", className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center space-x-2">
          {isRoot && (
            <>
              <BreadcrumbItem href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbItem>
              {separator}
            </>
          )}
          {enhancedChildren.map((child, index) => {
            return (
              <React.Fragment key={index}>
                {child}
                {index < childrenArray.length - 1 && separator}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb, BreadcrumbItem };
