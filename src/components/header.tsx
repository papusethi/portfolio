import { Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavDrawer from "./nav-drawer";

export const navConfig = [
  { path: "/about", title: "About" },
  { path: "/articles", title: "Articles" },
  { path: "/projects", title: "Projects" },
  { path: "/uses", title: "Uses" }
];

const Header = () => {
  return (
    <header className="my-8">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              {/* --- start editing from here --- */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-9 w-9 flex flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Link href="/">
                    <Image
                      src={"/portrait.webp"}
                      alt="profile"
                      width={36}
                      height={36}
                      className="h-7 w-7 rounded-full"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex justify-end md:justify-center">
                  <NavDrawer />

                  <nav className="hidden md:block">
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {navConfig.map(({ path, title }) => (
                        <li key={title} className="relative">
                          <Link
                            href={path}
                            className="inline-block px-3 py-2 transition text-zinc-800 dark:text-zinc-100 hover:text-teal-500"
                          >
                            {title}
                          </Link>
                          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div>
                  <button className="flex items-center rounded-full bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                    <Moon size={20} />
                  </button>
                </div>
              </div>
              {/* --- end editing till here --- */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
