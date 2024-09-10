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
  const profileImgLink = "/portrait.jpg";

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
                <Image
                  src={profileImgLink}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-xl rotate-3 bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                />
              </div>

              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I&apos;m Papu Sethi. I live in Hyderabad City, where I develop for the future.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                    I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js
                    & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to
                    life. Seamless user experience, pixel-perfect design, and writing clear, readable, highly performant
                    code are essential to me.
                  </p>
                  <p>
                    I began my journey as a web developer in 2019, and since then, I&apos;ve continued to grow and
                    evolve, taking on new challenges and learning the latest technologies along the way. I&apos;m
                    building cutting-edge web applications using modern technologies such as Next.js, TypeScript,
                    Tailwind CSS, MongoDB, PostgreSQL, and much more.
                  </p>
                  <p>
                    I am very much a progressive thinker and enjoy working on products end-to-end, from ideation all the
                    way to development. The thrill of creating something from scratch and seeing it come to life fuels
                    my passion for this field.
                  </p>
                  <p>
                    I hold a B.E. in Computer Engineering and currently work as a full-time software engineer. I&apos;m
                    an avid learner, constantly seeking new knowledge and skills, with a keen interest in becoming a
                    software architect.
                  </p>
                  <p>
                    If you&apos;re looking for a dedicated and skilled developer to bring your project to life,
                    don&apos;t hesitate to reach out and say hello! I promise I don&apos;t bite. 😉
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
                          target="_blank"
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
