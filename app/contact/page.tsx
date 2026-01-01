import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="container section">
      <h1>Contact</h1>
      <p>
        Tell me what you’re working on — billing, cloud operations, CI/CD, platform modernization —
        and I’ll respond with next steps.
      </p>

      <ContactForm />
    </main>
  );
}
