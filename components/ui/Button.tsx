import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
  icon?: "arrow" | "send" | "whatsapp";
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
  target,
  rel,
}: ButtonProps) {
  return (
    <a
      className={`button button--${variant} ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      <span>{children}</span>
      {icon === "whatsapp" ? (
        <WhatsAppIcon className="button__icon button__icon--whatsapp" />
      ) : (
        <ArrowRight
          aria-hidden="true"
          className={icon === "send" ? "button__icon button__icon--send" : "button__icon"}
          size={17}
          strokeWidth={2.3}
        />
      )}
    </a>
  );
}
