import About from "@/components/about";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Skills />
      <Contact />
      <section className="mt-6 mb-10 text-center text-sm">
        <span className="font-medium">Updated portfolio:</span>{" "}
        <a
          href="https://mason.gmu.edu/~rkumar25/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-blue-600"
        >
          https://mason.gmu.edu/~rkumar25/
        </a>
      </section>
    </main>
  );
}
