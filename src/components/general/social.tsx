'use client';

import React from 'react';

import { twMerge } from 'tailwind-merge';

import Link from '@/components/ui/link';
import { SOCIAL_LINKS } from '@/lib/data';

const Social: React.FC<{ variant?: 'dark' | 'light' }> = ({ variant = 'dark' }) => {
  return (
    <div className={twMerge('flex gap-5 text-md', variant === 'dark' ? 'text-zinc-200' : 'text-zinc-900')}>
      {SOCIAL_LINKS.map((link) => (
        <React.Fragment key={link.href}>
          <Link className="transform transition-transform hover:rotate-12 cursor-pointer" variant={variant} href={link.href} externalLink>
            <link.icon />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Social;
