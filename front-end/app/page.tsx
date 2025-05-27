import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/photos/pp.jpg"
          alt="Profile photo"
          className="rounded-full  block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5" // bg-gray-100 hover:grayscale-0 grayscale
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Sebastian Jordan Montaño
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Check me out on{" "}
          <a href="https://github.com/jordanmontt" target="_blank">GitHub</a> at {" "}<a href="https://github.com/jordanmontt" target="_blank">jordanmontt</a>.
        </p>

        <p>
          I’m a software engineer currently working on a PhD at {" "}
          <a href="https://www.inria.fr/en/centre-inria-lille-nord-europe" target="_blank">INRIA - Lille</a> (National Institute for Research in Science and Technology, France), focusing on memory profilers, allocation sites, memory optimizations and fast and safe code instrumentation for object-oriented programming languages. I’m part of the Evref research team.
        </p>

        <p>
          I was one of the main developers for the {" "}
          <a href="https://github.com/pharo-ai/" target="_blank">pharo-ai</a> project, where I worked on libraries for machine learning algorithms, statistical metrics, and data preprocessing. I also spent several months as a {" "}
          <a target="_blank" href="https://github.com/moosetechnology">Moose engineer</a>, developing tools for the {" "}
          <a href="https://github.com/moosetechnology/MooseIDE" target="_blank">Moose IDE project</a>. I regularly contribute to the Pharo codebase and participate in various Pharo-related projects, such as Spec.
        </p>

        <p>
          I’ve been involved in open-source projects since 2020 and have worked as a software developer since late 2017.
        </p>

        <p>
          Beyond programming languages, I have a deep love for human languages. Feel free to reach out to me in:
          <ul>
            <li>Spanish (native)</li>
            <li>English (C1 - TOEIC 975)</li>
            <li>French (C1 level)</li>
            <li>Italian (B2 level, still learning!)</li>
          </ul>
        </p>

        <h2>Contact Details</h2>
        <p>
          <span>Sebastian Jordan Montaño</span>
          <br /> <span>sebastian.jordan@inria.fr</span> <br />
        </p>

      </div>
    </section>
  );
}
