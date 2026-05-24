import { contactLinks } from "@/data/portfolio";

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage({
  name,
  email,
  message,
}: ContactFormPayload): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactLinks.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio contact from ${name}`,
        _template: "table",
      }),
    }
  );

  const data = (await response.json()) as { success?: boolean | string };
  const ok =
    response.ok &&
    data.success !== false &&
    data.success !== "false";

  if (!ok) {
    throw new Error("Failed to send message");
  }
}
