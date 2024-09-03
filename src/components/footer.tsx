import React from "react";

const footer = () => {
  const linksConfig = [
    { path: "/about", title: "About" },
    { path: "/projects", title: "Projects" },
    { path: "/speaking", title: "Speaking" },
    { path: "/uses", title: "Uses" }
  ];

  return (
    <div className="px-8 pt-10 pb-16">
      <div className="flex gap-8 justify-between items-center">
        <div>
          <ul className="flex justify-between items-center gap-6">
            {linksConfig.map(({ path, title }) => (
              <li key={title} className="text-sm text-zinc-800 dark:text-zinc-100 hover:text-teal-500">
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-zinc-400 dark:text-zinc-100">&copy; 2024 Spencer Sharp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
