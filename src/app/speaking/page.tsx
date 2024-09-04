import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const conferencesConfig = [
  {
    location: "SysConf 2021",
    name: "In space, no once can watch you stream - until now",
    description:
      "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  },
  {
    location: "Business of Startups 2020",
    name: "Lessons learned from our first product recall",
    description:
      "They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  }
];

const podcastsConfig = [
  {
    location: "Encoding Design, July 2022",
    name: "Using design as a competitive advantage",
    description:
      "How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  },
  {
    location: "The Escape Velocity Show, March 2022",
    name: "Bootstrapping an aerospace company to $17M ARR",
    description:
      "The story of how we built one of the most promising space startups in the world without taking any capital from investors.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  },
  {
    location: "How They Work Radio, September 2021",
    name: "Programming your company operating system",
    description:
      "On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  }
];

export const metadata: Metadata = {
  title: "Speaking - Papu Sethi",
  description: "A Professional Software Engineer"
};

const Speaking = () => {
  return (
    <div className="px-8 pt-10 pb-16 relative">
      <div className="w-4/6">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’ve spoken at events all around the world and been interviewed for many podcasts.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth
          than there is in writing, and I love podcast interviews because they give me the opportunity to answer
          questions instead of just present my opinions.
        </p>
      </div>

      <div className="mt-16 w-5/6">
        <div className="flex gap-4">
          <div className="w-1/4 border-l pl-4">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Conferences</h2>
          </div>

          <div className="w-3/4 flex flex-col gap-12">
            {conferencesConfig.map(({ location, name, description, link }) => (
              <article key={name}>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 border-l-2 pl-2">{location}</p>

                <div className="mt-4">
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>
                </div>

                <div className="mt-4">
                  <Link href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                    <span>Watch video</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex gap-4">
          <div className="w-1/4 border-l pl-4">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Podcasts</h2>
          </div>

          <div className="w-3/4 flex flex-col gap-12">
            {podcastsConfig.map(({ location, name, description, link }) => (
              <article key={name}>
                <p className="text-xs text-gray-400 border-l-2 pl-2">{location}</p>

                <div className="mt-4">
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>
                </div>

                <div className="mt-4">
                  <Link href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                    <span>Listen to podcast</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default Speaking;
