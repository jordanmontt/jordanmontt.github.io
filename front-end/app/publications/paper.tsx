import React from "react";
import { formatAuthors } from './utilities';


type PaperComponentProps = {
  paper: Paper;
};

export default function PaperComponent({ paper }: PaperComponentProps) {
  return (
    <div rel="noopener noreferrer" className="mb-8 block group flex flex-col">
      <div className="w-full flex justify-between items-baseline">
        <span className="text-black dark:text-white font-medium tracking-tight">
          {paper.title}
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
          {paper.year}
        </span>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        {formatAuthors(paper.authors)}
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        {paper.conference}
      </p>
      <a href={paper.pdfUrl} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
        Download it
      </a>
    </div>
  );
}
