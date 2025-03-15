import Head from 'next/head';

import Companies from '@/components/general/companies';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import AboutMe from '@/components/sections/journey';
import Testimonials from '@/components/sections/testimonials';
import Work from '@/components/sections/work';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <meta property="og:title" content="Papu Sethi" />
      </Head>
      <Hero />
      <AboutMe />
      <Work />
      <Testimonials />
      <Companies />
      <Footer />
    </main>
  );
}
