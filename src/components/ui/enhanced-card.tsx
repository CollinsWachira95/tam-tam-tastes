
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "elevated" | "interactive" | "featured" | "pricing";
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
  hoverable?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

export const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({
    className,
    variant = "default",
    size = "md",
    bordered = true,
    hoverable = false,
    shadow = "sm",
    contentClassName,
    headerClassName,
    footerClassName,
    children,
    ...props
  }, ref) => {
    // Styling based on variant
    const variantClasses = {
      default: "bg-white",
      outline: "bg-white border-2",
      elevated: "bg-white shadow-lg",
      interactive: "bg-white border hover:border-tamtam-orange-300 hover:shadow-md transition-all duration-300",
      featured: "bg-gradient-to-br from-tamtam-orange-50 to-white border-tamtam-orange-100",
      pricing: "bg-white border-2 hover:border-tamtam-orange-500 hover:shadow-xl transition-all duration-300"
    };

    // Sizing classes
    const sizeClasses = {
      sm: "p-3",
      md: "p-5",
      lg: "p-6"
    };

    // Shadow classes
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg"
    };

    // Hover effect
    const hoverClasses = hoverable 
      ? "transform transition duration-300 hover:-translate-y-1 hover:shadow-lg" 
      : "";

    // Border classes
    const borderClasses = bordered ? "border" : "border-0";

    return (
      <Card
        ref={ref}
        className={cn(
          variantClasses[variant],
          shadowClasses[shadow],
          hoverClasses,
          borderClasses,
          "rounded-xl overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
EnhancedCard.displayName = "EnhancedCard";

// Enhanced versions of Card subcomponents
export const EnhancedCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
EnhancedCardHeader.displayName = "EnhancedCardHeader";

export const EnhancedCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
>(({ className, as: Comp = "h3", ...props }, ref) => {
  const Component = Comp;
  return (
    <CardTitle
      ref={ref}
      className={cn(
        "text-xl font-bold leading-tight tracking-tight text-tamtam-black",
        className
      )}
      {...props}
      as={Component}
    />
  );
});
EnhancedCardTitle.displayName = "EnhancedCardTitle";

export const EnhancedCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <CardDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground mt-1", className)}
    {...props}
  />
));
EnhancedCardDescription.displayName = "EnhancedCardDescription";

export const EnhancedCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
EnhancedCardContent.displayName = "EnhancedCardContent";

export const EnhancedCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { align?: "left" | "center" | "right" | "between" }
>(({ className, align = "left", ...props }, ref) => {
  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between"
  };

  return (
    <CardFooter
      ref={ref}
      className={cn(
        "flex items-center pt-4",
        alignClasses[align],
        className
      )}
      {...props}
    />
  );
});
EnhancedCardFooter.displayName = "EnhancedCardFooter";

// Card with image
export function ImageCard({
  image,
  alt,
  title,
  description,
  footer,
  imagePosition = "top",
  aspectRatio = "16:9",
  className,
  imageClassName,
  ...props
}: EnhancedCardProps & {
  image: string;
  alt: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  imagePosition?: "top" | "bottom" | "left" | "right";
  aspectRatio?: "square" | "video" | "wide" | "16:9" | "4:3" | "1:1" | "portrait";
  imageClassName?: string;
}) {
  const isHorizontal = imagePosition === "left" || imagePosition === "right";
  
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    portrait: "aspect-[3/4]"
  };

  const imageContainerClasses = {
    top: "w-full",
    bottom: "w-full",
    left: "w-full md:w-2/5",
    right: "w-full md:w-2/5 md:order-last"
  };

  const contentContainerClasses = {
    top: "w-full",
    bottom: "w-full",
    left: "w-full md:w-3/5",
    right: "w-full md:w-3/5"
  };

  return (
    <EnhancedCard className={cn("overflow-hidden", className)} {...props}>
      <div className={cn(
        "flex flex-col", 
        isHorizontal && "md:flex-row",
        imagePosition === "bottom" && "flex-col-reverse"
      )}>
        {/* Image container */}
        <div className={imageContainerClasses[imagePosition]}>
          <div className={cn(
            "overflow-hidden",
            aspectRatioClasses[aspectRatio],
            imageClassName
          )}>
            <img 
              src={image} 
              alt={alt} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
        
        {/* Content container */}
        <div className={contentContainerClasses[imagePosition]}>
          {title && (
            <EnhancedCardHeader>
              {typeof title === 'string' ? (
                <EnhancedCardTitle>{title}</EnhancedCardTitle>
              ) : (
                title
              )}
              {typeof description === 'string' ? (
                <EnhancedCardDescription>{description}</EnhancedCardDescription>
              ) : (
                description
              )}
            </EnhancedCardHeader>
          )}
          
          {props.children && (
            <EnhancedCardContent>
              {props.children}
            </EnhancedCardContent>
          )}
          
          {footer && (
            <EnhancedCardFooter>
              {footer}
            </EnhancedCardFooter>
          )}
        </div>
      </div>
    </EnhancedCard>
  );
}

// Price card specific component
export function PriceCard({
  title,
  price,
  currency = "$",
  period,
  description,
  features,
  action,
  popular = false,
  ...props
}: EnhancedCardProps & {
  title: string;
  price: number | string;
  currency?: string;
  period?: string;
  description?: string;
  features?: string[];
  action?: React.ReactNode;
  popular?: boolean;
}) {
  return (
    <EnhancedCard 
      variant={popular ? "featured" : "pricing"}
      shadow={popular ? "md" : "sm"}
      className={cn(
        "relative",
        popular && "border-tamtam-orange-300 ring-1 ring-tamtam-orange-200 scale-105 z-10"
      )}
      {...props}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-tamtam-orange-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      
      <EnhancedCardHeader className={cn(
        popular && "bg-gradient-to-r from-tamtam-orange-50 to-white"
      )}>
        <EnhancedCardTitle className="text-xl">{title}</EnhancedCardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-extrabold tracking-tight">{currency}{price}</span>
          {period && <span className="ml-1 text-sm text-muted-foreground">/{period}</span>}
        </div>
        {description && (
          <EnhancedCardDescription className="mt-3">
            {description}
          </EnhancedCardDescription>
        )}
      </EnhancedCardHeader>
      
      <EnhancedCardContent>
        {features && features.length > 0 && (
          <ul className="mt-6 space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex">
                <svg
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    popular ? "text-tamtam-orange-500" : "text-tamtam-green"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </EnhancedCardContent>
      
      {action && (
        <EnhancedCardFooter align="center" className="pb-6">
          {action}
        </EnhancedCardFooter>
      )}
    </EnhancedCard>
  );
}

// Testimonial card specific component
export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
  ...props
}: EnhancedCardProps & {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}) {
  return (
    <EnhancedCard 
      variant="outline" 
      className="h-full"
      {...props}
    >
      {rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={cn(
                "h-5 w-5", 
                i < rating ? "text-yellow-400" : "text-gray-300"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 15.934l-6.18 3.254 1.18-6.876L.001 7.514l6.9-1.003L10 .346l3.1 6.165 6.9 1.003-4.999 4.798 1.18 6.876z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      )}
      
      <blockquote className="relative">
        <svg
          className="absolute top-0 left-0 h-8 w-8 text-gray-200 transform -translate-x-4 -translate-y-4"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        
        <p className="text-base text-gray-800 relative z-10">
          {quote}
        </p>
        
        <div className="mt-6 flex items-center">
          {avatar && (
            <div className="flex-shrink-0 mr-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={avatar}
                alt={author}
              />
            </div>
          )}
          <div>
            <p className="text-base font-medium text-gray-900">
              {author}
            </p>
            {role && (
              <p className="text-xs text-gray-500">
                {role}
              </p>
            )}
          </div>
        </div>
      </blockquote>
    </EnhancedCard>
  );
}
