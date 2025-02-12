import React from "react";
import { teaching } from "../../../data/teaching.json"
import CourseComponent from "./course";
import PresentationComponent from "./presentation";


export default function Teaching() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-medium tracking-tight">Teaching</h1>
      <h2 className="mb-6 text-2xl font-medium tracking-tight"> Courses</h2>
      <div className="space-y-6">
        {teaching.courses.map((course, index) => (
          <CourseComponent course={course} key={index} />
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-medium tracking-tight"></h2>
      <h2 className="mb-6 text-2xl font-medium tracking-tight"> Talks</h2>
      <div className="space-y-6">
        {teaching.presentations.map((presentation, index) => (
          <PresentationComponent presentation={presentation} key={index} />
        ))}
      </div>
    </section>
  );
}
