import { LeafDivider } from "@/components/decorative/LeafDivider";

export function SectionHeading({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "section-heading--centered" : ""}`}>
      <h2>{children}</h2>
      <LeafDivider />
    </div>
  );
}
