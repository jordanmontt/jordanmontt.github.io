import React from "react";
import { education } from "../../../data/education.json"


export default function WorkExperience() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-medium tracking-tight">Education</h1>
      <div className="space-y-6">
        {education.map((each, index) => (

            <div  key={index} rel="noopener noreferrer" className="mb-8 block group flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {each.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {each.period}
                </span>
              </div>
              <a href={each.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
                {each.institution}
              </a>
              <p className="prose prose-neutral dark:prose-invert">
                {each.notes}
              </p>
            </div>

        ))}
      </div>
    </section>
  );
}
