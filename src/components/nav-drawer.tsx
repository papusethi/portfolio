"use client";

import { navLinks } from "@/constants/navLinks";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => setOpen(true)}
      >
        Menu <ChevronDown size={16} className="ml-1" />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-80 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed right-0 flex max-w-full p-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen transform transition duration-500 ease-in-out data-[closed]:-translate-y-full"
              >
                <div className="shadow-xl flex flex-col overflow-y-auto bg-white p-10 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base text-zinc-800 dark:text-zinc-400">Navigation</h2>
                    <button
                      aria-label="Close panel"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-zinc-800 dark:text-zinc-400"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="relative mt-6 flex-1">
                    <nav>
                      <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        {navLinks.map(({ path, title }) => (
                          <li key={title} className="relative">
                            <Link
                              href={path}
                              className="block py-2 transition text-zinc-800 dark:text-zinc-100 hover:text-teal-500"
                              onClick={() => setOpen(false)}
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default NavDrawer;
