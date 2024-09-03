import { Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  const navConfig = [
    { path: "/about", title: "About" },
    { path: "/articles", title: "Articles" },
    { path: "/projects", title: "Projects" },
    { path: "/speaking", title: "Speaking" },
    { path: "/uses", title: "Uses" }
  ];

  return (
    <header className="p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link href="/">
            <Image
              src={"/portrait.webp"}
              alt="profile"
              width={36}
              height={36}
              className="rounded-full ring-1 ring-zinc-900/5 p-1 bg-white/90 dark:bg-zinc-800/90"
            />
          </Link>
        </div>

        <div>
          <nav>
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
          <button className="rounded-full ring-1 bg-white/90 dark:bg-zinc-800/90 ring-zinc-900/5 p-2 shadow text-gray-500 hover:text-teal-500">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default header;
