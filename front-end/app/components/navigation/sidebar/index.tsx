import Link from "next/link";
import { navItems } from "../navbar/index"


const Sidebar = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className={`sidebar-container fixed w-full h-full overflow-hidden justify-center grid pt-[120px] left-0 z-10 
         bg-white dark:bg-custom-dark`}
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    {/* Close icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                </button>

                <div className="md:flex gap-x-6 whitespace-nowrap">
                    {Object.entries(navItems).map(([path, { name }]) => (
                        <Link
                            onClick={toggle}
                            key={path}
                            href={path}
                            className=
                            "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle px-4 py-2 text-lg"
                        >
                            {name}
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Sidebar;