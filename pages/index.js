import React from 'react';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      {/* Home Cover Section with Images from All Folders */}
      <section className="pb-8">
        <Carousel folders={['blomster', 'kaker', 'makroner']} />
      </section>
      <div style={{ height: '40px' }}></div>

      {/* Services Section */}
      <section className="pb-8 px-8">
        <h2 className="text-2xl mb-8 font-light text-center">Tjenester</h2>
        <ul className="flex flex-wrap gap-4 justify-between">
          <li className="w-full md:w-[30%]">
            <a
              href="/blomster-dekor"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <div className="text-center p-4 font-light">Blomster & Dekor</div>
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src="/blomster/001.png"
                  alt="Blomster & Dekor"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </li>
          <li className="w-full md:w-[30%]">
            <a
              href="/kaker"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <div className="text-center p-4 font-light">Kaker</div>
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src="/kaker/001.jpg"
                  alt="Kaker"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </li>
          <li className="w-full md:w-[30%]">
            <a
              href="/makroner-cupcakes"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <div className="text-center p-4 font-light">Makroner & Cupcakes</div>
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src="/makroner/001.png"
                  alt="Makroner & Cupcakes"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section className="mt-12 px-8">
        <h2 className="text-2xl mb-4 font-light text-center">Om meg</h2>
        <p className="font-light text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          sapien non mi condimentum sollicitudin...
        </p>
      </section>
    </>
  );
}
