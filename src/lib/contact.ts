export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  /** Honeypot field — must remain empty for legitimate submissions. */
  website?: string;
}

export interface ContactApiResponse {
  ok: boolean;
  error?: string;
}

export const CONTACT_LIMITS = {
  nameMax: 120,
  emailMax: 254,
  messageMin: 5,
  messageMax: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { valid: true; data: Required<Omit<ContactFormValues, "website">> }
  | { valid: false; error: string };

/** Normalizes and validates contact form input on both client and server. */
export function validateContactPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { valid: false, error: "Invalid request payload." };
  }

  const record = input as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";

  if (!name) {
    return { valid: false, error: "Please enter your name." };
  }
  if (name.length > CONTACT_LIMITS.nameMax) {
    return { valid: false, error: `Name must be ${CONTACT_LIMITS.nameMax} characters or fewer.` };
  }

  if (!email || email.length > CONTACT_LIMITS.emailMax || !EMAIL_PATTERN.test(email)) {
    return { valid: false, error: "Please enter a valid email address." };
  }

  if (message.length < CONTACT_LIMITS.messageMin) {
    return {
      valid: false,
      error: `Please include a brief message (at least ${CONTACT_LIMITS.messageMin} characters).`,
    };
  }
  if (message.length > CONTACT_LIMITS.messageMax) {
    return {
      valid: false,
      error: `Message must be ${CONTACT_LIMITS.messageMax} characters or fewer.`,
    };
  }

  return { valid: true, data: { name, email, message } };
}

/** Escapes HTML special characters to prevent injection in HTML emails. */
export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

