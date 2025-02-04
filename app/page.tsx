import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/config/socials";
import { links } from "@/config/links";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 flex items-center justify-center p-4">
      <main className="bg-neutral-800 rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <Image
            src="/pic.jpg"
            alt="Picture of me"
            width={200}
            height={200}
            className="rounded-full border-4 border-neutral-600 aspect-square object-cover"
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
        <div className="w-full md:w-2/3 flex flex-col justify-center mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-300 mb-6">
            Passionate about web development and machine learning. Always eager
            to learn and create innovative solutions that push the boundaries of
            technology. With a strong foundation in computer science and a keen
            eye for detail, I strive to develop efficient and elegant solutions
            to complex problems.
          </p>
          <div className="flex flex-col items-center align-middle sm:flex-row gap-4">
            {/* Map over links array */}
            {links.map((link) => (
              <Button
                key={link.name}
                asChild
                className="bg-neutral-700 hover:bg-neutral-600 text-neutral-100"
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}

            {/* Map over socials array */}
            {socials.map((social) => (
              <Button
                key={social.name}
                asChild
                className="bg-neutral-700 hover:bg-neutral-600 text-neutral-100"
              >
                <Link href={social.link} target="_blank">
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

