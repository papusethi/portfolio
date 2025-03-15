import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Link from '@/components/ui/link';
import Typography from '@/components/ui/typography';
import { COMPANIESANDCLIENTS } from '@/lib/data';

const Companies = () => {
  return (
    <div className="bg-zinc-950 w-full flex flex-col justify-center" id="contact">
      <div className="py-24 flex flex-col items-center gap-24 max-md:py-16">
        <div className="flex max-xl:flex-col">
          {COMPANIESANDCLIENTS.map((company, i) => (
            <Link key={company.name} href={company.href} externalLink={true}>
              <div
                className={twMerge(
                  i === COMPANIESANDCLIENTS.length - 1 ? 'border-r' : 'max-xl:border-r max-xl:border-b-0',
                  'w-56 h-24 border-zinc-800 border-l border-y flex justify-center items-center py-2 px-4'
                )}
              >
                <Image src={company.logo} alt={company.name} width={i === 0 ? 120 : 200} />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-8 justify-center items-center">
          <Typography variant="h2" className="text-white text-center">
            Lets build beautiful, <br />
            meaningful things together!
          </Typography>

          <Link href="mailto:mrpapusethi@gmail.com" className="text-white uppercase text-center hover:no-underline" variant="dark">
            mrpapusethi@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Companies;
