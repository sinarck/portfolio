import Footer from "./components/footer";
import PortfolioHeader from "./components/portfolio-header";
import Projects from "./components/projects";
import Section from "./components/section";
import Separator from "./components/ui/separator";
import { portfolioData } from "./config/portfolio";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="lowercase font-mono rounded-xl border border-neutral-800 bg-neutral-900/40 shadow-xl">
          <div className="p-8 sm:p-10 space-y-8">
            <PortfolioHeader
              name={portfolioData.name}
              headline={portfolioData.headline}
            />

            <Separator />

            <Section label="about">
              <p className="text-body">{portfolioData.summary}</p>
            </Section>

            <Projects items={portfolioData.projects} />
            <Footer
              email={portfolioData.email}
              github={portfolioData.github}
              linkedin={portfolioData.linkedin}
              twitter={portfolioData.twitter}
            />
          </div>
        </article>
      </div>
    </main>
  );
}

