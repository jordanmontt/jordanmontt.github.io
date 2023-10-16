import React from "react";
import { workExperience } from "../../../data/work-experience.json";


export default function WorkExperience() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-medium tracking-tight">Work Experience</h1>
      <div className="space-y-6">
        {workExperience.map((project, index) => (

            <div  key={index} rel="noopener noreferrer" className="block group flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="mb-2 text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.period}
                </span>
              </div>
              <a href={project.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
                {project.employer}
              </a>
              <p className="prose prose-neutral dark:prose-invert">
                {project.shortDescription}
              </p>
              <p className="prose prose-neutral dark:prose-invert">
                {project.description}
              </p>
            </div>

        ))}
      </div>
    </section>
  );
}
