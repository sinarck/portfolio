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
          <div className="p-8 sm:p-10 space-y-8">
            <header className="space-y-2">
              <h1 className="text-header">{portfolioData.name}</h1>
              <h2 className="text-subtitle">{portfolioData.headline}</h2>
              {contacts && <div className="text-meta">{contacts}</div>}
            </header>

            <hr className="border-neutral-800/70" />

            <section className="space-y-3">
              <h3 className="text-section-label">about</h3>
              <p className="text-body">{portfolioData.summary}</p>
            </section>

            <section className="space-y-3 pt-4 border-t border-neutral-800/70">
              <h3 className="text-section-label">experience</h3>
              <ul className="list-bullets">
                {portfolioData.experience.map((experience, idx) => (
                  <li key={idx}>
                    <div className="leading-relaxed">
                      <span className="font-sans font-medium text-neutral-200">
                        {experience.role}
                      </span>{" "}
                      @ {experience.company}{" "}
                      <span className="text-neutral-500">
                        ({experience.period})
                      </span>
                    </div>
                    {experience.highlights?.length > 0 && (
                      <ul className="list-subbullets">
                        {experience.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-neutral-800/70">
              <h3 className="text-section-label">projects</h3>
              <ul className="list-bullets">
                {portfolioData.projects.map((project, idx) => (
                  <li key={idx}>
                    <div className="flex flex-wrap items-baseline gap-2 leading-relaxed">
                      <span className="font-sans font-medium text-neutral-200">
                        {project.name}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-neutral-700 hover:decoration-neutral-400 text-neutral-400"
                        >
                          {project.link}
                        </a>
                      )}
                    </div>
                    <ul className="list-subbullets">
                      <li>{project.description}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-neutral-800/70">
              <h3 className="text-section-label">skills</h3>
              <p className="text-body">{portfolioData.skills.join(", ")}</p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

