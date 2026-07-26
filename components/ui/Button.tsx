import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
  icon?: "arrow" | "send";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
}: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className={icon === "send" ? "button__icon button__icon--send" : "button__icon"}
        size={17}
        strokeWidth={2.3}
      />
    </a>
  );
}
