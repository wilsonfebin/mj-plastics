"use client";

import { Send, X } from "lucide-react";
import { useId, useRef, useState } from "react";

const fields = [
  { name: "name", label: "Name", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", autoComplete: "tel", required: true },
  { name: "company", label: "Company", autoComplete: "organization" },
  { name: "country", label: "Country", autoComplete: "country-name", required: true },
  { name: "product", label: "Product Requirement", required: true },
  { name: "quantity", label: "Quantity", inputMode: "decimal" as const },
] as const;

export function EnquiryForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  function openDialog() {
    setSubmitted(false);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button className="button enquiry-trigger" type="button" onClick={openDialog}>
        <span>Enquiry Now</span>
        <Send className="button__icon button__icon--send" size={17} aria-hidden="true" />
      </button>
      <dialog
        className="enquiry-dialog"
        ref={dialogRef}
        aria-labelledby={`${formId}-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="enquiry-dialog__panel">
          <button
            className="enquiry-dialog__close"
            type="button"
            onClick={closeDialog}
            aria-label="Close enquiry form"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <div className="enquiry-dialog__heading">
            <span>MJ Plastics</span>
            <h2 id={`${formId}-title`}>Product Enquiry</h2>
            <p>Your details stay in this browser. No email application will open.</p>
          </div>
          {submitted ? (
            <div className="enquiry-dialog__success" role="status" aria-live="polite">
              <p>Thank you. Your enquiry has been recorded.</p>
              <button className="button" type="button" onClick={closeDialog}>
                Close
              </button>
            </div>
          ) : (
            <form
              className="enquiry-form"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const entry = Object.fromEntries(new FormData(form).entries());

                try {
                  const storageKey = "mj-plastics-enquiries";
                  const existing = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
                  const enquiries = Array.isArray(existing) ? existing : [];
                  localStorage.setItem(
                    storageKey,
                    JSON.stringify([
                      ...enquiries,
                      { ...entry, recordedAt: new Date().toISOString() },
                    ]),
                  );
                } catch {
                  // The success state still works if browser storage is unavailable.
                }

                form.reset();
                setSubmitted(true);
              }}
            >
              <div className="enquiry-form__grid">
                {fields.map((field) => (
                  <label key={field.name}>
                    <span>{field.label}</span>
                    <input
                      id={`${formId}-${field.name}`}
                      name={field.name}
                      autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
                      inputMode={"inputMode" in field ? field.inputMode : undefined}
                      required={"required" in field ? field.required : false}
                    />
                  </label>
                ))}
              </div>
              <label className="enquiry-form__message">
                <span>Message</span>
                <textarea name="message" rows={4} />
              </label>
              <button className="button enquiry-form__submit" type="submit">
                <span>Record Enquiry</span>
                <Send className="button__icon button__icon--send" size={17} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
