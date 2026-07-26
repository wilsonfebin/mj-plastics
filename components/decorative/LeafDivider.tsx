import { Leaf } from "lucide-react";

export function LeafDivider({ wide = false }: { wide?: boolean }) {
  return (
    <span className={`leaf-divider ${wide ? "leaf-divider--wide" : ""}`} aria-hidden="true">
      <span />
      <Leaf size={18} fill="currentColor" strokeWidth={1.5} />
      <span />
    </span>
  );
}
