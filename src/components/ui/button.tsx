
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 text-white hover:from-tamtam-orange-500 hover:to-tamtam-orange-600 shadow-premium-hover",
        subtle: "bg-muted hover:bg-muted/80 text-muted-foreground",
        green: "bg-tamtam-green hover:bg-tamtam-green/90 text-white",
        white: "bg-white text-tamtam-black border border-gray-200 hover:bg-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        "2xl": "h-14 rounded-md px-12 text-lg",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        none: "rounded-none",
        sm: "rounded",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      withAnimation: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        withAnimation: true,
        variant: "default",
        className: "transition-all duration-300 hover:-translate-y-1",
      },
      {
        withAnimation: true,
        variant: "premium",
        className: "transition-all duration-300 hover:-translate-y-1",
      },
      {
        withAnimation: true,
        variant: "secondary",
        className: "transition-all duration-300 hover:-translate-y-1",
      },
      {
        withAnimation: true,
        variant: "green",
        className: "transition-all duration-300 hover:-translate-y-1",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      withAnimation: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  as?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    withAnimation,
    asChild = false, 
    loading = false,
    leadingIcon,
    trailingIcon,
    children,
    as: Component,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : Component || "button"
    
    return (
      <Comp
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            rounded,
            withAnimation,
            className 
          })
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!loading && leadingIcon}
        {children}
        {!loading && trailingIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
