import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-primary transition-smooth",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-smooth",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-purple",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
        cyber: "bg-gradient-cyber text-white font-bold border-0 hover:shadow-neon animate-glow transition-smooth",
        neon: "bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-smooth glow-border",
        hero: "bg-gradient-primary text-white font-bold hover:shadow-neon transition-smooth border-0 animate-pulse-neon",
        professional: "bg-gradient-secondary text-white hover:shadow-purple transition-smooth font-bold",
        cart: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon font-bold transition-smooth",
        buy: "bg-gradient-cyber text-white font-black hover:shadow-neon transition-smooth border-0 animate-glow",
        glass: "bg-card/20 backdrop-blur-md border border-primary/30 text-foreground hover:bg-card/40 hover:border-primary/60 transition-smooth",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
