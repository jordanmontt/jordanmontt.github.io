import React from "react";


type PresentationProps = {
  presentation: Presentation
}

export default function PresentationComponent({ presentation }: PresentationProps) {
  return (
    <div rel="noopener noreferrer" className="block group flex flex-col">
      <div className="w-full flex justify-between items-baseline">
        <span className="mb-2 text-black dark:text-white font-medium tracking-tight">
          {presentation.title}
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
          {presentation.date}
        </span>
      </div>
      <a href={presentation.institutionUrl} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
        {presentation.institution}
      </a>

      <p className="prose prose-neutral dark:prose-invert">
        <a href={presentation.videoUrl} className="text-black font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
          Video
        </a>   <a href={presentation.slidesUrl} className="text-black font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
          Slides
        </a>
      </p>
    </div>
  );
}