import React from 'react';

import Skill from '@/components/general/skill';
import Typography from '@/components/ui/typography';
import { SKILLS } from '@/lib/data';

const Journey = () => {
  return (
    <section className="bg-zinc-50 w-full flex justify-center" id="journey">
      <div className="flex max-w-3xl py-24 px-4 flex-col gap-12 justify-center items-center max-md:py-16">
        <Typography variant="h2" className="uppercase w-full flex justify-center">
          A BIT &apos;BOUT MY JOURNEY
        </Typography>

        <div className="flex flex-col gap-8">
          <Typography variant="body1">
            I&apos;m a result-oriented frontend developer based in Hyderabad, India, with 3+ years of experience crafting smooth, engaging, and
            high-performance user interfaces.
            <br />
            <br />
            My journey began in the startup world, where I had the opportunity to build projects from the ground up. Starting with JavaScript and
            React, I worked on complex UI architectures, which helped me develop a deep understanding of frontend development. Over time, I expanded
            my skill set to include Next.js, TypeScript, Redux, and TailwindCSS, enabling me to build scalable, efficient, and visually appealing
            applications.
            <br />
            <br />
            I take pride in writing clean, maintainable code and following best practices to ensure performance, accessibility, and a great user
            experience.
            <br />
            <br />
            While frontend is my primary focus, I also have a working knowledge of Node.js, Express, and MongoDB, allowing me to handle backend logic
            when needed. I thrive on challenging projects that push me to optimize performance, refine UI/UX, and explore new technologies.
          </Typography>

          <div className="flex flex-col gap-4">
            Here&apos;s some tech and frameworks I love and work with:
            <div className="flex gap-3 flex-wrap">
              {SKILLS.map((skill) => (
                <React.Fragment key={skill.label}>
                  <Skill icon={skill.icon} label={skill.label} variant="md" />
                </React.Fragment>
              ))}
            </div>
          </div>

          <Typography variant="body1">
            <span className="font-semibold text-zinc-900">Fun fact:&nbsp;</span>
            Rumor has it that if you mention &ldquo;clean code&rdquo; three times in front of a mirror, I might just appear and refactor your entire
            project. 😆✨
            <br />
            <br />
            Learning advanced Next.js is something I&apos;m working on, and I try to dedicate time to it whenever I can.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Journey;
