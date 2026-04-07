import type { ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40",
  secondary:
    "bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg shadow-secondary-500/25",
  outline:
    "border-2 border-primary-500 text-primary-500 hover:bg-primary-50",
  white:
    "bg-white text-primary-600 hover:bg-primary-50 shadow-lg shadow-black/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
