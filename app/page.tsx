"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socials } from "@/config/socials";
import { links } from "@/config/links";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      {/* Add animated grid pattern as background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-0 h-full w-full"
        )}
      />

      <main className="bg-neutral-900/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8 border border-neutral-800 z-20 relative">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <Image
            src="pic.jpg"
            alt="Picture of me"
            width={200}
            height={200}
            className="rounded-full border border-neutral-800 aspect-square object-cover"
            style={{
              objectPosition: "center 10%",
            }}
          />
          <h1 className="mt-4 text-3xl font-bold text-neutral-100 text-center">
            Aadi Sanghvi
          </h1>
          <p className="text-neutral-400 mt-2 text-center">
            Aspiring Software Engineer
          </p>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-start mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            I&apos;m a creative and driven student with a passion for building
            dynamic frontend experiences and exploring innovative machine
            learning solutions. I thrive on transforming ideas into engaging
            digital products.
          </p>
          {/* Updated container: all links side by side */}
          <div className="flex flex-row flex-wrap items-center gap-4">
            <TooltipProvider>
              {links
                .filter(
                  (link) =>
                    link.name !== "Projects" && link.name !== "Experience"
                )
                .map((link) => (
                  <Tooltip key={link.name}>
                    <TooltipTrigger>
                      <Button
                        asChild
                        className="bg-neutral-800 hover:bg-neutral-900 hover:border-neutral-800 border border-neutral-700"
                      >
                        {link.href.startsWith("mailto:") ? (
                          <a href={link.href}>{link.name}</a>
                        ) : (
                          <Link href={link.href}>{link.name}</Link>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" align="center">
                      {link.tooltip}
                    </TooltipContent>
                  </Tooltip>
                ))}

              {socials.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger>
                    <Button
                      asChild
                      className="bg-neutral-800 hover:bg-neutral-900 hover:border-neutral-800 border border-neutral-700"
                    >
                      {social.link.startsWith("mailto:") ? (
                        <a href={social.link}>
                          <social.icon className="w-6 h-6" />
                          <span className="sr-only">{social.name}</span>
                        </a>
                      ) : (
                        <Link href={social.link} target="_blank">
                          <social.icon className="w-6 h-6" />
                          <span className="sr-only">{social.name}</span>
                        </Link>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center">
                    {social.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

