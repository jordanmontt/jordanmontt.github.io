import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/": { name: "About Me" },
  "/education": { name: "Education" },
  "/projects": { name: "Projects" },
  "/work-experience": { name: "Work Experience" },
  "/teaching": { name: "Teaching" },
  "/publications": { name: "Writings" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-center w-full">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight whitespace-nowrap">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-4 items-center whitespace-nowrap">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className=
              "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle px-4 py-2 text-lg"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
