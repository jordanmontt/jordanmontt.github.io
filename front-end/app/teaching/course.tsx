import React from "react";


type CourseProps = {
  course: Course
}

export default function CourseComponent({ course }: CourseProps) {
  return (
    <div rel="noopener noreferrer" className="block group flex flex-col">
      <div className="w-full flex justify-between items-baseline">
        <span className="mb-2 text-black dark:text-white font-medium tracking-tight">
          {course.title}
        </span>
        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
          {course.date}
        </span>
      </div>
      <a href={course.institutionUrl} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
        {course.institution}
      </a>
      <p className="prose prose-neutral dark:prose-invert">
        {course.description}
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        {course.hours} Academic hours
      </p>
      {course.ressources.map((ressource, index) => (
        <a key={index} href={ressource.url} className="text-black dark:text-white font-medium tracking-tight dark:prose-invert hover:opacity-80 transition-opacity duration-200">
          {ressource.name}
        </a>

      ))}
    </div>
  );
}
