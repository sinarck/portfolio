import Experience from "./components/experience";
import PortfolioHeader from "./components/portfolio-header";
import Projects from "./components/projects";
import Section from "./components/section";
import Skills from "./components/skills";
import Separator from "./components/ui/separator";
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
            <PortfolioHeader
              name={portfolioData.name}
              headline={portfolioData.headline}
              contacts={contacts}
            />

            <Separator />

            <Section label="about">
              <p className="text-body">{portfolioData.summary}</p>
            </Section>

            <Experience items={portfolioData.experience} />

            <Projects items={portfolioData.projects} />

            <Skills items={portfolioData.skills} />
          </div>
        </article>
      </div>
    </main>
  );
}

