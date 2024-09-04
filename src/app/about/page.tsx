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
    <div className="px-8 pt-10 pb-16 flex gap-16 relative">
      <div className="w-7/12">
        <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’m Spencer Sharp. I live in New York City, where I design the future.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old,
          just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at
          the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped —
          hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries
          it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry
          into orbit and was able to transmit a photo back down to our family computer from space.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you
          can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of
          their own backyards.
        </p>
      </div>

      <div className="w-5/12">
        <div>
          <Image src={profileImgLink} alt="Profile" width={300} height={300} className="rounded-xl rotate-3" />
        </div>

        <div className="mt-16">
          <ul className="my-6 flex flex-col gap-3">
            {socialLinksConfig.map(({ icon, name, title, link }) => (
              <li key={name}>
                <Link
                  href={link}
                  className="flex items-center text-sm text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-500"
                >
                  <span>{icon}</span>
                  <span className="ml-4">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t w-5/6" />

          <ul className="my-6 flex flex-col gap-3">
            {mailLinksConfig.map(({ icon, name, title, link }) => (
              <li key={name}>
                <Link
                  href={link}
                  className="flex items-center text-sm text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-500"
                >
                  <span>{icon}</span>
                  <span className="ml-4">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    </div>
  );
};

export default About;
