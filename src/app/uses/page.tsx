import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses - Papu Sethi",
  description: "A Professional Software Engineer"
};

const Uses = () => {
  return (
    <div className="sm:px-8 my-16 sm:my-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          {/* start editing from here */}

          {/* start header and desc */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl text-zinc-800 dark:text-zinc-100">
              Software I use, gadgets I love, and other things I recommend.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into
              thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of
              all of my favorite stuff.
            </p>
          </div>
          {/* end header and desc */}

          <div className="mt-16 sm:mt-20">
            <div className="space-y-16 md:space-y-20">
              <section className="md:border-l md:border-zinc-200/80 md:pl-6 md:dark:border-zinc-700/40">
                <div className="max-w-3xl grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Workstation</h2>

                  <div className="md:col-span-3">
                    <ul className="space-y-12">
                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          16” MacBook Pro, M1 Max, 64GB RAM (2021)
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day.
                          I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put
                          it through with our various launch simulations.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          Apple Pro Display XDR (Standard Glass)
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          The only display on the market if you want something HiDPI and bigger than 27”. When you’re
                          working at planetary scale, every pixel you can get counts.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          IBM Model M SSK Industrial Keyboard
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          They don’t make keyboards the way they used to. I buy these any time I see them go up for sale
                          and keep them in storage in case I need parts or need to retire my main.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          Apple Magic Trackpad
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          Something about all the gestures makes me feel like a wizard with special powers. I really
                          like feeling like a wizard with special powers.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          Herman Miller Aeron Chair
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do
                          it in an expensive chair.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="md:border-l md:border-zinc-200/80 md:pl-6 md:dark:border-zinc-700/40">
                <div className="max-w-3xl grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Development tools</h2>

                  <div className="md:col-span-3">
                    <ul className="space-y-12">
                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Sublime Text 4</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime
                          Text is still the best text editor ever made.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">iTerm2</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          I’m honestly not even sure what features I get with this that aren’t just part of the macOS
                          Terminal but it’s what I use.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">TablePlus</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          Great software for working with databases. Has saved me from building about a thousand admin
                          interfaces for my various projects over the years.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="md:border-l md:border-zinc-200/80 md:pl-6 md:dark:border-zinc-700/40">
                <div className="max-w-3xl grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                  <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Productivity</h2>

                  <div className="md:col-span-3">
                    <ul className="space-y-12">
                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Alfred</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the
                          application launcher world.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Reflect</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          Great tool for scheduling meetings while protecting my calendar and making sure I still have
                          lots of time for deep work during the week.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">SavvyCal</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          They don’t make keyboards the way they used to. I buy these any time I see them go up for sale
                          and keep them in storage in case I need parts or need to retire my main.
                        </p>
                      </li>

                      <li className="relative flex flex-col items-start">
                        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Focus</h3>
                        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                          Simple tool for blocking distracting websites when I need to just do the work and get some
                          momentum going.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* end editing till here */}
        </div>
      </div>
    </div>
  );
};

export default Uses;
