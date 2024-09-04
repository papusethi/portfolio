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
    <div className="px-8 pt-10 pb-16 relative">
      <div className="w-4/6">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological
          order.
        </p>
      </div>

      <div className="w-5/6">
        <div className="border-l">
          {articlesConfig.map(({ datetime, name, description, link }) => (
            <div key={name} className="mt-16 flex gap-4">
              <div className="w-1/4 pl-4">
                <time dateTime={datetime} className="text-sm text-zinc-400 dark:text-zinc-500">
                  {datetime}
                </time>
              </div>

              <div className="w-3/4">
                <article>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{name}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>
                  </div>
                  <div className="mt-4">
                    <Link href={link} className="text-sm font-medium text-teal-500 inline-flex items-center">
                      <span>Read article</span>
                      <span>
                        <ChevronRight size={16} />
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default Articles;
