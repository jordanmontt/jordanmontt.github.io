import React from "react";


type BlogpostComponentProps = {
  blogpost: Blogpost;
};

export default function BlogpostComponent({ blogpost }: BlogpostComponentProps) {
  return (
    <div rel="noopener noreferrer" className="mb-8 block group flex flex-col">
      <div className="w-full flex justify-between items-baseline">
        <span className="text-black dark:text-white font-medium tracking-tight">
          {blogpost.title}
        </span>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        {blogpost.description}
      </p>
      <a href={blogpost.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
        Read it
      </a>
    </div>
  );
}
