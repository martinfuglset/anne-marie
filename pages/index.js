import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Blomster, Dekor og Kaker</title>
        <meta
          name="description"
          content="Blomster, dekor og kaker til din spesielle dag. Utforsk våre tjenester og produkter!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Home Cover Section with Carousel */}
      <section className="pb-8">
        <Carousel folders={['blomster', 'kaker', 'makroner']} />
      </section>

      {/* Highlight Section */}
      <section className={`${dancingScript.className} mt-8 mb-12 px-8 text-center`}>
        <p className="text-lg leading-relaxed mb-4">
          Blomster, dekor og kaker til din spesielle dag
        </p>
        <div className="flex justify-center">
          <img src="/flower-border.svg" alt="Flower Border" className="w-[40%] h-auto" />
        </div>
      </section>


      {/* Services Section */}
      <section className="pb-8 px-8">
        <h2 className="text-2xl mb-8 font-light text-center">Tjenester</h2>
        <ul className="flex flex-wrap gap-4 justify-between">
          {[
            {
              href: '/blomster-dekor',
              title: 'Blomster & Dekor',
              imgSrc: '/blomster/001.png',
              imgAlt: 'Blomster & Dekor',
            },
            {
              href: '/kaker',
              title: 'Kaker',
              imgSrc: '/kaker/001.jpg',
              imgAlt: 'Kaker',
            },
            {
              href: '/makroner-cupcakes',
              title: 'Makroner & Cupcakes',
              imgSrc: '/makroner/001.png',
              imgAlt: 'Makroner & Cupcakes',
            },
          ].map((service) => (
            <li key={service.href} className="w-full md:w-[30%]">
              <a
                href={service.href}
                className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
              >
                <div className="text-center p-4 font-light text-lg">{service.title}</div>
                <div className="w-full aspect-square overflow-hidden">
                  <Image
                    src={service.imgSrc}
                    alt={service.imgAlt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* About Section */}
      <section className="mt-12 px-8">
        <h2 className="text-2xl mb-4 font-light text-center">Om meg</h2>
        <p className="text-lg font-light text-center">
          Dekor og baking har vært min lidenskap så lenge jeg kan huske. Gjennom over 10 års erfaring som dekoratør og kakebaker ved selskapslokalet Glenne Gård, har jeg hatt gleden av å bidra til over hundre bryllup og andre festlige anledninger.
        </p>
        <p className="text-lg font-light text-center">
          Min største glede er å realisere kundens visjon og skape magiske øyeblikk som blir husket. Jeg tar gjerne en uforpliktende prat for å høre om dine ønsker og drømmer.
        </p>

        <div className="flex justify-center mt-8">
          <Image
            src="/mamma.png"
            alt="Om meg"
            width={192}
            height={192}
            className="rounded-full object-cover"
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
        </div>
      </section>
    </>
  );
}
