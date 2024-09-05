import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const articlesConfig = [
  {
    datetime: "September 5, 2022",
    name: "Crafting a design system for a multiplanetary future",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  },
  {
    datetime: "September 2, 2022",
    name: "Introducing Animaginary: High performance web animations",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  },
  {
    datetime: "July 14, 2022",
    name: "Rewriting the CosmOS kernel in Rust",
    description:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    link: "https://www.youtube.com/watch?v=ct09uiagh0o"
  }
];

export const metadata: Metadata = {
  title: "Articles - Papu Sethi",
  description: "A Professional Software Engineer"
};

const Articles = () => {
  return (
    <div>
      <div className="sm:px-8 my-16 sm:my-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* start editing from here */}
            {/* start header and desc */}
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold sm:text-5xl text-zinc-800 dark:text-zinc-100">
                Writing on software design, company building, and the aerospace industry.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                All of my long-form thoughts on programming, leadership, product design, and more, collected in
                chronological order.
              </p>
            </div>
            {/* end header and desc */}

            <div className="mt-16 sm:mt-20">
              <div className="max-w-3xl">
                <div className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/50 space-y-12">
                  {articlesConfig.map(({ datetime, name, description, link }) => (
                    <article key={name} className="md:grid md:grid-cols-4 md:items-baseline">
                      <div className="mb-3">
                        <time
                          dateTime={datetime}
                          className="text-sm text-zinc-400 dark:text-zinc-500 border-l-2 border-zinc-200 dark:border-zinc-700/50 pl-2 md:border-l-0"
                        >
                          {datetime}
                        </time>
                      </div>

                      <div className="md:col-span-3">
                        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h2>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

                        <div className="mt-4">
                          <Link href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                            <span>Read article</span>
                            <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* end editing till here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
