import { Link } from "lucide-react";
import Image from "next/image";

const projects = () => {
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

  return (
    <div className="px-8 pt-10 pb-16 relative">
      <div className="w-4/6">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of
          them are open-source, so if you see something that piques your interest, check out the code and contribute if
          you have ideas for how it can be improved.
        </p>
      </div>

      <div className="mt-16 -mx-6">
        <div className="grid grid-cols-3 gap-4">
          {projectsConfig.map(({ favicon, name, description, githubLink }) => (
            <div key={name} className="flex flex-col gap-4 p-6 rounded-xl hover:bg-zinc-50">
              <div>
                <span className="inline-block rounded-full border p-1 ring-1 ring-zinc-100">
                  <Image src={favicon} alt={name} width={32} height={32} />
                </span>
              </div>

              <div>
                <h1 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>
              </div>

              <div className="mt-2 text-sm text-zinc-400 dark:text-zinc-500 flex gap-2 items-center hover:text-teal-500">
                <Link size={16} />
                <a href={githubLink}>{githubLink}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default projects;
