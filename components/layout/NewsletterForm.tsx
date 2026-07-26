"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Newsletter subscription will be available soon.");
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="newsletter-form__field">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        <button type="submit" aria-label="Join the newsletter">
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
      <span className="newsletter-form__message" aria-live="polite">
        {message}
      </span>
    </form>
  );
}
