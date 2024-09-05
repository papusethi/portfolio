import { Link as LinkIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const projectsConfig = [
  {
    favicon: "https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg",
    name: "Planetaria",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    githubLink: "github.com"
  },
  {
    favicon: "https://spotlight.tailwindui.com/_next/static/media/animaginary.8d221e52.svg",
    name: "Animaginary",
    description: "High performance web animation library, hand-written in optimized WASM.",
    githubLink: "github.com"
  },
  {
    favicon: "https://spotlight.tailwindui.com/_next/static/media/helio-stream.2ac8d11f.svg",
    name: "HelioStream",
    description: "Real-time video streaming library, optimized for interstellar transmission.",
    githubLink: "github.com"
  },
  {
    favicon: "https://spotlight.tailwindui.com/_next/static/media/cosmos.c70b0295.svg",
    name: "CosmOS",
    description: "The operating system that powers our Planetaria space shuttles.",
    githubLink: "github.com"
  },
  {
    favicon: "https://spotlight.tailwindui.com/_next/static/media/open-shuttle.db0327e4.svg",
    name: "OpenShuttle",
    description: "The schematics for the first rocket I designed that successfully made it to orbit.",
    githubLink: "github.com"
  }
];

export const metadata: Metadata = {
  title: "Projects - Papu Sethi",
  description: "A Professional Software Engineer"
};

const Projects = () => {
  return (
    <div className="sm:px-8 my-16 sm:my-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          {/* start editing from here */}
          {/* start header and desc */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl text-zinc-800 dark:text-zinc-100">
              Things I’ve made trying to put my dent in the universe.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many
              of them are open-source, so if you see something that piques your interest, check out the code and
              contribute if you have ideas for how it can be improved.
            </p>
          </div>
          {/* end header and desc */}

          <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsConfig.map(({ favicon, name, description, githubLink }) => (
                <li
                  key={name}
                  className="group relative trasition flex flex-col items-start rounded-xl p-6 hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image src={favicon} alt={name} width={32} height={32} />
                  </div>

                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon size={16} />
                    <Link href={githubLink}>{githubLink}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* end editing till here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
