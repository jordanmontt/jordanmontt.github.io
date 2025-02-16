import Link from "next/link";
import { ThemeSwitch } from "../../theme-switch";
import { metaData } from "../../../config";
import Logo from "./Logo"

export const navItems = {
    "/": { name: "About Me" },
    "/education": { name: "Education" },
    "/projects": { name: "Projects" },
    "/work-experience": { name: "Work Experience" },
    "/teaching": { name: "Teaching" },
    "/publications": { name: "Writings" },
};

export function Navbar({ toggle }: { toggle: () => void }) {
    return (
        <nav className="lg:mb-16 mb-12 py-5">
            <div className="flex flex-col md:flex-row md:items-center justify-center w-full">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Logo />

                    <button type="button" className="inline-flex items-center md:hidden"
                        onClick={toggle}>
                        {/* Menu icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            className="fill-current text-black dark:text-white">
                            <path
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                        </svg>
                    </button>
                </div>

                {/*className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-4 items-center whitespace-nowrap"> */}
                <div className="hidden md:flex gap-x-6 whitespace-nowrap">
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

export default Navbar