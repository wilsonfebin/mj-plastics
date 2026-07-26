"use client";

import { enquiryHref } from "@/data/company";
import { navigation } from "@/data/navigation";
import { Menu, Send, X } from "lucide-react";
import { useState } from "react";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div
        id="mobile-site-menu"
        className={`mobile-nav__panel ${open ? "mobile-nav__panel--open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="mobile-nav__cta" href={enquiryHref} onClick={() => setOpen(false)}>
          Enquiry Now <Send size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
