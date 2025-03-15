import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import Typography from '@/components/ui/typography';
import LogoClientLove from '../../../public/icons/icon-client-love.svg';
import Link from '../ui/link';

type ClientProps = {
  name: string;
  avatar: StaticImageData;
  testimonial: string;
  company: string;
  linkedinId: string;
};

const Client = ({ name, avatar, testimonial, company, linkedinId }: ClientProps) => {
  return (
    <div className="w-full max-w-lg flex flex-col gap-6">
      <Image src={LogoClientLove} alt="Client love icon" />

      <Typography variant="body1" className="overflow-hidden line-clamp-8">
        {testimonial}
      </Typography>

      <Link href={linkedinId} externalLink={true}>
        <div className="flex gap-4 items-center">
          <Image src={avatar} alt={name} width={56} height={56} className="rounded-full" />
          <div className="flex flex-col">
            <Typography variant="body1" className="font-semibold">
              {name}
            </Typography>
            <Typography variant="body2">{company}</Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Client;
