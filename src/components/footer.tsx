import Link from "next/link";
import { navConfig } from "./header";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12 border-t border-zinc-200/80 dark:border-zinc-700/40">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="pt-10 pb-16">
                {/* --- start editing from here --- */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navConfig.map(({ path, title }) => (
                      <li key={title}>
                        <Link href={path} className="transition hover:text-teal-500 dark:hover:text-teal-400">
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    &copy; 2024 Papu Sethi. All rights reserved.
                  </p>
                </div>
                {/* --- end editing till here --- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
