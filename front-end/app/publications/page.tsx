import React from "react";
import type { Metadata } from "next";
import { blogposts, books, papers } from "../../../data/publications.json"
import BookComponent from "./book";
import PaperComponent from "./paper";
import BlogpostComponent from "./blogpost";


export default function WorkExperience() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-medium tracking-tight">Writings</h1>

      <h2 className="mb-6 text-2xl font-medium tracking-tight"> Books</h2>
      <div className="space-y-6">
        {books.map((book: Book, index: number) => (
          <BookComponent book={book} key={index} />
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-medium tracking-tight"></h2>
      <h2 className="mb-6 text-2xl font-medium tracking-tight">Papers</h2>
      <div className="space-y-6">
        {papers.map((paper, index) => (
         <PaperComponent paper={paper} key={index} />
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-medium tracking-tight"></h2>
      <h2 className="mb-6 text-2xl font-medium tracking-tight">Blogposts</h2>
      <div className="space-y-6">
        {blogposts.map((blogpost, index) => (
         <BlogpostComponent blogpost={blogpost} key={index} />
        ))}
      </div>
    </section>
  );
}
