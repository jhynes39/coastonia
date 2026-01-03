// src/app/careers/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Careers | Coastonia Technology Services",
  description:
    "Careers at Coastonia Technology Services — Junior DevOps Engineer (Entry-Level).",
};

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Careers</h1>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700">
          At <strong>Coastonia Technology Services</strong>, we believe great
          engineers are built through <strong>mentorship</strong>,{" "}
          <strong>curiosity</strong>, and <strong>hands-on learning</strong>.
          While we are a small and growing consultancy, we are always interested
          in connecting with people who are eager to learn and grow with us.
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700">
          We currently do not have multiple open roles, but we are accepting
          applications for the position below.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Junior DevOps Engineer (Entry-Level)
          </h2>
          <div className="flex flex-col gap-1 text-sm text-neutral-700 sm:flex-row sm:gap-6">
            <span>
              <strong>Location:</strong> Remote (Canada / North America)
            </span>
            <span>
              <strong>Type:</strong> Full-time (Junior / Entry-Level)
            </span>
          </div>
        </div>

        <hr className="my-6 border-neutral-200" />

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About the role</h3>
            <p className="text-neutral-700 leading-relaxed">
              This role is designed for <strong>someone early in their career</strong>,
              including <strong>recent college or university graduates</strong>. You do{" "}
              <strong>not</strong> need to be an expert. We are looking for someone who is{" "}
              <strong>curious</strong>, <strong>motivated</strong>, and excited to learn how
              modern software systems are built and operated.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              You will work alongside experienced engineers and gradually learn how to
              deploy, automate, and support real production systems.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What you’ll be learning and helping with</h3>
            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed space-y-1">
              <li>Using <strong>Git</strong> to collaborate on real projects</li>
              <li>Understanding <strong>CI/CD pipelines</strong> (build, test, deploy)</li>
              <li>Working with <strong>Docker</strong> and containerized applications</li>
              <li>Learning the basics of <strong>cloud platforms</strong> (AWS, Azure, or GCP)</li>
              <li>Assisting with deployments and environment setup</li>
              <li>Reading logs, monitoring systems, and helping troubleshoot issues</li>
              <li>Writing documentation and simple automation scripts</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What we’re looking for</h3>
            <p className="text-neutral-700 leading-relaxed">
              You do <strong>not</strong> need to know everything listed below — these are{" "}
              <strong>nice-to-haves</strong>, not hard requirements.
            </p>
            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed space-y-1">
              <li>
                A diploma or degree in Computer Science, IT, Engineering, or a related field
                (or equivalent hands-on experience)
              </li>
              <li>Basic familiarity with <strong>Linux</strong> or command-line tools</li>
              <li>Some exposure to <strong>Git</strong> (school projects are fine)</li>
              <li>Interest in cloud, DevOps, or infrastructure</li>
              <li>Strong willingness to learn and ask questions</li>
              <li>Clear communication and good documentation habits</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What you do not need</h3>
            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed space-y-1">
              <li>Prior DevOps job experience</li>
              <li>Deep Kubernetes knowledge</li>
              <li>Certifications (AWS, Azure, etc.)</li>
              <li>Perfect understanding of cloud architecture</li>
            </ul>
            <p className="text-neutral-700 leading-relaxed">
              We value <strong>potential and attitude</strong> over checklists.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What we offer</h3>
            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed space-y-1">
              <li>Real-world DevOps experience with production systems</li>
              <li>Mentorship and guided learning</li>
              <li>Exposure to modern tools and workflows</li>
              <li>A supportive, low-ego engineering environment</li>
              <li>Room to grow into a DevOps or Cloud Engineer role</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">How to apply</h3>
            <p className="text-neutral-700 leading-relaxed">
              If this sounds interesting, please send:
            </p>
            <ul className="list-disc pl-5 text-neutral-700 leading-relaxed space-y-1">
              <li>A short resume <strong>or</strong> LinkedIn profile</li>
              <li>(Optional) GitHub or school projects</li>
              <li>A brief note explaining why you’re interested in DevOps</li>
            </ul>

            <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-sm text-neutral-700">
                Email:{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="mailto:careers@coastonia.com"
                >
                  careers@coastonia.com
                </a>
              </p>
            </div>

            <p className="mt-4 text-sm text-neutral-700">
              Prefer a contact page instead?{" "}
              <Link className="underline underline-offset-4" href="/contact">
                Contact us here
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-4">
            <p className="text-sm text-neutral-700">
              <strong>Note:</strong> We may not always have active openings, but we are
              happy to hear from curious engineers who want to grow. Feel free to reach out
              even if no role is currently listed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
