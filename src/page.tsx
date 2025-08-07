import { portfolioData } from "./config/portfolio";

export default function Page() {
  const contacts = [
    portfolioData.location,
    portfolioData.email,
    portfolioData.github,
    portfolioData.linkedin,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="lowercase font-mono rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-xl">
          <div className="p-8 sm:p-10 space-y-6">
            <header className="space-y-1">
              <h1 className="font-sans text-xl font-semibold text-neutral-100 tracking-tight">
                {portfolioData.name}
              </h1>
              <h2 className="font-sans text-sm text-neutral-400">
                {portfolioData.headline}
              </h2>
              {contacts && (
                <div className="text-xs text-neutral-500">{contacts}</div>
              )}
            </header>

            <hr className="border-neutral-800" />

            <section className="space-y-2">
              <h3 className="font-sans text-sm font-medium text-neutral-400">
                about
              </h3>
              <p className="text-sm text-neutral-300">
                {portfolioData.summary}
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="font-sans text-sm font-medium text-neutral-400">
                experience
              </h3>
              <ul className="ml-4 list-disc text-sm text-neutral-300 space-y-3">
                {portfolioData.experience.map((e, idx) => (
                  <li key={idx}>
                    <div>
                      {e.role} @ {e.company} ({e.period})
                    </div>
                    {e.highlights?.length > 0 && (
                      <ul className="mt-1 ml-6 list-[circle] text-neutral-400 space-y-1">
                        {e.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="font-sans text-sm font-medium text-neutral-400">
                projects
              </h3>
              <ul className="ml-4 list-disc text-sm text-neutral-300 space-y-3">
                {portfolioData.projects.map((p, idx) => (
                  <li key={idx}>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span>{p.name}</span>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-neutral-700 hover:decoration-neutral-400"
                        >
                          {p.link}
                        </a>
                      )}
                    </div>
                    <ul className="mt-1 ml-6 list-[circle] text-neutral-400 space-y-1">
                      <li>{p.description}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="font-sans text-sm font-medium text-neutral-400">
                skills
              </h3>
              <p className="text-sm text-neutral-300">
                {portfolioData.skills.join(", ")}
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

