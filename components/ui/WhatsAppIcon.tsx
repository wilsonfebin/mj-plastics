import Image from "next/image";

type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "" }: WhatsAppIconProps) {
  return (
    <span className={`whatsapp-icon ${className}`} aria-hidden="true">
      <Image
        src="/icons/whatsapp.svg"
        alt=""
        width={19}
        height={19}
        unoptimized
      />
    </span>
  );
}
