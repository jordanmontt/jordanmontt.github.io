import React from "react";
import { projects } from "../../../data/projects.json"


export default function Projects() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Personal Projects</h2>
        {projects.personal.map((project, index) => (
          <div key={index} className="mb-8 block group flex flex-col">
            <div className="w-full flex justify-between items-baseline">
              <a href={project.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
                {project.name}
              </a>
            </div>
            <p className="prose prose-neutral dark:prose-invert">
              {project.description}
            </p>
          </div>
        ))}

        <h2 className="text-2xl font-semibold">Work Projects</h2>
        {projects.work.map((project, index) => (
          <div key={index} className="mb-8 block group flex flex-col">
            <div className="w-full flex justify-between items-baseline">
              <a href={project.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
                {project.name}
              </a>
            </div>
            <p className="prose prose-neutral dark:prose-invert">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
