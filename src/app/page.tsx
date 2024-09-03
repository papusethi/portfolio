import { ArrowDown, BriefcaseBusiness, ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import { socialLinksConfig } from "./about/page";
import { articlesConfig } from "./articles/page";

const home = () => {
  const worksConfig = [
    {
      favicon: "https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg",
      company: "Planetaria",
      role: "CEO",
      startDate: "2019",
      endDate: "Present"
    },
    {
      favicon: "https://spotlight.tailwindui.com/_next/static/media/airbnb.b4000690.svg",
      company: "Airbnb",
      role: "Product Designer",
      startDate: "2014",
      endDate: "2019"
    },
    {
      favicon: "https://spotlight.tailwindui.com/_next/static/media/facebook.dd9e7d48.svg",
      company: "Facebook",
      role: "iOS Software Engineer",
      startDate: "2011",
      endDate: "2014"
    },
    {
      favicon: "https://spotlight.tailwindui.com/_next/static/media/starbucks.4a5bd050.svg",
      company: "Starbucks",
      role: "Shift Supervisor",
      startDate: "2008",
      endDate: "2011"
    }
  ];

  return (
    <div className="px-8 pt-10 pb-16 relative">
      <div className="w-4/6">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
          Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
        </p>

        <div className="mt-6">
          <div className="flex items-center gap-6">
            {socialLinksConfig.map(({ icon, name, title, link }) => (
              <div key={name} className="inline-block">
                <a href={link} className="text-zinc-600 hover:text-teal-500">
                  <span>{icon}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-16 -mx-16">
        <div className="flex gap-8 justify-between">
          <div className="relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-1.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-2.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-3.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-4.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex gap-16">
        <div className="w-7/12">
          <div className="flex flex-col gap-12">
            {articlesConfig.map(({ datetime, name, description, link }) => (
              <article key={name}>
                <time dateTime={datetime} className="text-sm text-zinc-400 dark:text-zinc-500 border-l-2 pl-2">
                  {datetime}
                </time>
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>
                </div>
                <div className="mt-4">
                  <a href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                    <span>Read article</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="w-5/12">
          <div className="rounded-xl border p-6">
            <div className="flex gap-4">
              <span className="text-gray-500">
                <Mail size={20} />
              </span>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Stay up to date</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>

            <form className="mt-6">
              <div className="flex justify-between gap-4">
                <input
                  required
                  aria-required="true"
                  type="text"
                  placeholder="Email address"
                  className="rounded-md shadow flex-1 text-sm py-2 px-3 ring-1 ring-zinc-200 focus:ring-2 focus:ring-teal-500 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md shadow bg-black text-white text-sm px-3 py-2 hover:opacity-90"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 rounded-xl border p-6">
            <div className="flex gap-4">
              <span className="text-gray-500">
                <BriefcaseBusiness size={20} />
              </span>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Work</span>
            </div>

            <div className="mt-6">
              <ol className="flex flex-col gap-4">
                {worksConfig.map(({ favicon, company, role, startDate, endDate }) => (
                  <li key={company} className="flex gap-4 items-center">
                    <div className="shadow ring-1 ring-zinc-200 rounded-full inline-block p-1">
                      <Image src={favicon} alt={company} width={32} height={32} />
                    </div>
                    <div className="flex-1 flex justify-between items-end">
                      <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-1">
                        <dt className="sr-only">Company</dt>
                        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                          {company}
                        </dd>

                        <dt className="sr-only">Role</dt>
                        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>

                        <dt className="sr-only">Date</dt>
                        <dd
                          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                          aria-label={`${startDate} until ${endDate}`}
                        >
                          <time dateTime={startDate}>{startDate}</time> <span aria-hidden="true">—</span>{" "}
                          <time dateTime={endDate}>{endDate}</time>
                        </dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6">
              <button className="w-full rounded-md bg-zinc-100 text-sm px-3 py-2 hover:bg-zinc-200 flex justify-center items-center gap-2">
                <span>Download CV</span>
                <span className="text-gray-500">
                  <ArrowDown size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default home;
