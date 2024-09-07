import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const socialLinksConfig = [
  {
    icon: <Linkedin size={20} />,
    name: "LinkedIn",
    title: "Follow on LinkedIn",
    link: "https://linkedin.com/in/papusethi"
  },
  {
    icon: <Github size={20} />,
    name: "Github",
    title: "Follow on GitHub",
    link: "https://github.com/papusethi"
  },
  {
    icon: <Instagram size={20} />,
    name: "Instagram",
    title: "Follow on Instagram",
    link: "https://instagram.com/_papusethi_"
  }
];

export const metadata: Metadata = {
  title: "About - Papu Sethi",
  description: "A Professional Software Engineer"
};

const About = () => {
  const profileImgLink = "/portrait.webp";

  const mailLinksConfig = [
    {
      icon: <Mail size={20} />,
      name: "Gmail",
      title: "mrpapusethi@gamil.com",
      link: "mrpapusethi@gmail.com"
    }
  ];

  return (
    <div className="sm:px-8 my-16 sm:my-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            {/* start editing from here */}
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <Image src={profileImgLink} alt="Profile" width={300} height={300} className="rounded-xl rotate-3" />
              </div>

              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I’m Spencer Sharp. I live in New York City, where I design the future.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    I’ve loved making things for as long as I can remember, and wrote my first program when I was 6
                    years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught
                    myself to type on.
                  </p>
                  <p>
                    The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot
                    oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down
                    from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be
                    able to get to orbit.
                  </p>
                  <p>
                    I spent the next few summers indoors working on a rocket design, while I recovered from the multiple
                    surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my
                    dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from
                    space.
                  </p>
                  <p>
                    Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle
                    kits you can assemble at home so that the next generation of kids really can make it to orbit — from
                    the comfort of their own backyards.
                  </p>
                </div>
              </div>

              <div className="lg:pl-20 space-y-4">
                <div className="space-y-4">
                  <ul className="flex flex-col gap-4">
                    {socialLinksConfig.map(({ icon, name, title, link }) => (
                      <li key={name}>
                        <Link
                          href={link}
                          className="flex items-center gap-4 text-sm text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-500"
                        >
                          {icon}
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-zinc-200 dark:border-zinc-800" />

                  <ul className="flex flex-col gap-4">
                    {mailLinksConfig.map(({ icon, name, title, link }) => (
                      <li key={name}>
                        <Link
                          href={link}
                          className="flex items-center gap-4 text-sm text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-500"
                        >
                          {icon}
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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

export default About;
