import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking - Papu Sethi",
  description: "A Professional Software Engineer"
};

const Uses = () => {
  return (
    <div className="px-8 pt-10 pb-16 relative">
      <div className="w-4/6">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into
          thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of
          my favorite stuff.
        </p>
      </div>

      <div className="w-5/6">
        <div className="mt-16  flex gap-4">
          <div className="w-1/4 border-l pl-4">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Workstation</h2>
          </div>

          <div className="w-3/4 flex flex-col gap-12">
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                16” MacBook Pro, M1 Max, 64GB RAM (2021)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never
                heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our
                various launch simulations.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                Apple Pro Display XDR (Standard Glass)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at
                planetary scale, every pixel you can get counts.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                IBM Model M SSK Industrial Keyboard
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep
                them in storage in case I need parts or need to retire my main.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Apple Magic Trackpad</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Something about all the gestures makes me feel like a wizard with special powers. I really like feeling
                like a wizard with special powers.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Herman Miller Aeron Chair</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an
                expensive chair.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex gap-4">
          <div className="w-1/4 border-l pl-4">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Development tools</h2>
          </div>

          <div className="w-3/4 flex flex-col gap-12">
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Sublime Text 4</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is
                still the best text editor ever made.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">iTerm2</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but
                it’s what I use.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">TablePlus</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Great software for working with databases. Has saved me from building about a thousand admin interfaces
                for my various projects over the years.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex gap-4">
          <div className="w-1/4 border-l pl-4">
            <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Productivity</h2>
          </div>

          <div className="w-3/4 flex flex-col gap-12">
            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Alfred</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application
                launcher world.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Reflect</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Using a daily notes system instead of trying to keep things organized by topics has been super powerful
                for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even
                though all of my writing happens in the daily note.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">SavvyCal</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of
                time for deep work during the week.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Focus</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                Simple tool for blocking distracting websites when I need to just do the work and get some momentum
                going.
              </p>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default Uses;
