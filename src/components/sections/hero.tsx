import Image from 'next/image';

import Social from '@/components/general/social';
import Typography from '@/components/ui/typography';

import PapuSethi from '../../../public/images/papusethi-fullpose.jpg';

const Hero = () => {
  return (
    <section className="w-full pb-24 pt-16 flex justify-center max-lg:py-16 max-lg:pt-0">
      <div className="w-full max-w-[1120px] px-8 flex justify-between items-center max-lg:max-full max-lg:flex-col max-lg:p-4 max-lg:pt-0 max-xl:w-full gap-8">
        <div className="flex flex-col gap-12 max-lg:order-1">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Typography variant="body1" className="font-medium">
                Heyyo👋, I&apos;m
              </Typography>
              <Typography
                variant="h1"
                className="uppercase bg-gradient-to-r from-yellow-50 to-rose-100 bg-[length:100%_14px] bg-no-repeat bg-bottom w-fit"
              >
                Papu Sethi
              </Typography>
            </div>
            <div className="flex gap-1 flex-col">
              <Typography variant="body1" className="font-medium">
                A frontend developer who turns ideas into interactive experiences. 🎨
              </Typography>
              <Typography variant="body1" className="font-medium">
                Great design meets flawless functionality—let&apos;s make the web better! 🌟
              </Typography>
            </div>
          </div>

          <Social variant="light" />
        </div>

        <div className="overflow-hidden rounded-[168px] rounded-bl max-lg:order-0 max-lg:rounded-[40px] max-lg:rounded-bl max-h-[450px] max-md:max-h-auto">
          <Image src={PapuSethi} alt="Papu's photo" width={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
