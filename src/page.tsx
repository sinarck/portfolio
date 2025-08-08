import Footer from "./components/footer";
import { ModeToggle } from "./components/mode-toggle";
import PortfolioHeader from "./components/portfolio-header";
import Projects from "./components/projects";
import Section from "./components/section";
import { ThemeProvider } from "./components/theme-provider";
import Separator from "./components/ui/separator";
import { portfolioData } from "./config/portfolio";

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <article className="lowercase font-mono rounded-xl border bg-card shadow-xl">
            <div className="p-8 sm:p-10 space-y-8">
              <div className="flex items-start justify-between">
                <PortfolioHeader
                  name={portfolioData.name}
                  headline={portfolioData.headline}
                />
                <ModeToggle />
              </div>

              <Separator />

              <Section label="about">
                <p className="text-body">{portfolioData.summary}</p>
              </Section>

              <Projects items={portfolioData.projects} />

              <Separator />

              <Footer
                email={portfolioData.email}
                socials={portfolioData.socials}
              />
            </div>
          </article>
        </div>
      </main>
    </ThemeProvider>
  );
}

