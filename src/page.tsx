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
      <main className="min-h-dvh bg-background text-foreground flex items-center justify-center p-4 pb-6 sm:p-0">
        <div className="w-full max-w-3xl mx-auto sm:px-6 py-4 sm:py-8 md:py-16 max-h-full overflow-y-auto sm:overflow-visible">
          <article className="lowercase font-mono rounded-xl border bg-card shadow-lg sm:shadow-xl mx-auto max-w-full">
            <div className="p-3 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="flex items-start justify-between gap-2">
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

