import Image from 'next/image';

import Typography from '@/components/ui/typography';
import { PHOTOS } from '@/lib/data';

const Photography = () => {
  return (
    <section className="w-full py-24 px-10 max-md:px-4 flex flex-col gap-16 items-center max-md:py-16 justify-center">
      <div className="flex flex-col justify-center gap-4 items-center max-w-7xl">
        <Typography variant="h2" component="h2" className="uppercase w-full flex justify-center">
          PHOTOGRAPHY
        </Typography>
        <Typography variant="body1" className="text-center">
          Explore a mix of moments that catch my eye - from candid shots to peaceful landscapes. It&apos;s all about seeing things from a fresh
          perspective. <br />
          Dive in and enjoy!
        </Typography>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {PHOTOS.map((photo) => (
          <Image src={photo.photo} alt={photo.alt} key={photo.alt} width={590} />
        ))}
      </div>
    </section>
  );
};

export default Photography;
