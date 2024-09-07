import { ArrowDown, BriefcaseBusiness, ChevronRight, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { socialLinksConfig } from "./about/page";
import { articlesConfig } from "./articles/page";

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

export const metadata: Metadata = {
  title: "Papu Sethi - Software designer, founder, and amateur astronaut.",
  description: "A Professional Software Engineer"
};

const Home = () => {
  return (
    <div>
      <div className="sm:px-8 mt-16 sm:mt-20">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              {/* start header and desc */}
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold sm:text-5xl text-zinc-800 dark:text-zinc-100">
                  Software designer, founder, and amateur astronaut.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of
                  Planetaria, where we develop technologies that empower regular people to explore space on their own
                  terms.
                </p>

                {/* start social links */}
                <div className="mt-6">
                  <ul className="flex items-center gap-6">
                    {socialLinksConfig.map(({ icon, name, title, link }) => (
                      <li key={name}>
                        <Link href={link} className="text-zinc-600 hover:text-teal-500" aria-label={title}>
                          {icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* end social links */}
              </div>
              {/* end header and desc */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-1.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              src={"/image-2.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
            <Image
              src={"/image-3.webp"}
              alt="profile"
              width={240}
              height={240}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
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

      <div className="sm:px-8 mt-24 sm:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              {/* start article and form */}
              <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2">
                <div className="flex flex-col gap-12">
                  {articlesConfig.map(({ datetime, name, description, link }) => (
                    <article key={name}>
                      <div className="mb-3">
                        <time
                          dateTime={datetime}
                          className="text-sm text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-200 dark:border-zinc-500/50 pl-2"
                        >
                          {datetime}
                        </time>
                      </div>

                      <div>
                        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

                        <div className="mt-4">
                          <Link href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                            Read article
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="space-y-8 lg:pl-16 xl:pl-24">
                  {/* form start */}
                  <form action="/thank-you" className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h2 className="flex items-center text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      <Mail size={20} />
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Get notified when I publish something new, and unsubscribe at any time.
                    </p>

                    <div className="mt-6 flex">
                      <input
                        type="email"
                        placeholder="Email address"
                        aria-label="Email address"
                        required
                        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                      >
                        Join
                      </button>
                    </div>
                  </form>
                  {/* form end */}

                  {/* work start */}
                  <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h2 className="flex items-center text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      <BriefcaseBusiness size={20} />
                      <span className="ml-3">Work</span>
                    </h2>

                    <div className="mt-6">
                      <ol className="space-y-4">
                        {worksConfig.map(({ favicon, company, role, startDate, endDate }) => (
                          <li key={company} className="flex gap-4 items-center">
                            <div className="relative mt-1 h-10 w-10 flex flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                              <Image src={favicon} alt={company} width={32} height={32} className="h-7 w-7" />
                            </div>

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
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-6">
                      <a
                        href="/#"
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      >
                        Download CV
                        <ArrowDown size={16} className="text-gray-500" />
                      </a>
                    </div>
                  </div>
                  {/* work end */}
                </div>
              </div>
              {/* end article and forms */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
