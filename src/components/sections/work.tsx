import React from 'react';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/general/project-details';
import Typography from '@/components/ui/typography';

const Work = () => {
  return (
    <section className="py-24 w-full flex justify-center max-md:py-16" id="work">
      <div className="flex flex-col gap-24 max-w-[952px] px-4 w-full">
        <div className="flex flex-col gap-2 max-lg:items-center">
          <Typography variant="h2" component="h2" className="uppercase w-full flex justify-center">
            WORK
          </Typography>
          <Typography variant="body1" className="md:w-[80%] mx-auto text-center flex justify-center">
            Check out some of my recent work - cool products I&apos;ve been part of, built using the latest tech and libraries to create something
            awesome!
          </Typography>
        </div>

        <div className="flex gap-20 flex-wrap max-lg:justify-center">
          {PROJECTS.map((project) => (
            <React.Fragment key={project.name}>
              <ProjectDetails
                name={project.name}
                description={project.description}
                image={project.previewImage}
                techs={project.techs}
                color={project.color}
                colorClass={project.colorClass}
                href={project.href}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
