import Typography from '@/components/ui/typography';
import { BIT_OF_ME } from '@/lib/data';

const AboutMe = () => {
  return (
    <section className="w-full pb-24 pt-16 border-b border-zinc-200 flex justify-center px-4 max-md:py-10">
      <div className="flex flex-col gap-8 max-w-[928px]">
        <Typography variant="h1">Heyyo!</Typography>

        <div className="flex flex-col gap-6">
          <Typography variant="body1">
            It&apos;s Papu - bringing the good vibes!🦁
            <br />
            <br />
            A short intro for me would be: I believe in adding quality to everything—whether it’s the people I connect with, the experiences I create,
            or the little moments that make life special. Paying attention to the details isn’t just a habit; it’s what makes things truly meaningful.
            <br />
          </Typography>

          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              A peek into my life
            </Typography>
            <ul className="flex flex-col gap-2">
              {BIT_OF_ME.map((point) => (
                <li className="flex gap-2" key={point.emoji}>
                  <span>{point.emoji}</span>
                  <Typography variant="body1">{point.text}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant="body1" className="font-semibold">
              🌱 Life’s Motto
            </Typography>
            <Typography variant="body1">
              &ldquo;Collect memories, not regrets.&rdquo; – Life isn’t about perfection; it’s about experiences. Take chances, make mistakes, laugh
              too much, and cherish every moment—you won’t get them back. ✨🌿
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
