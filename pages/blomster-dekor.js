import React from 'react';
import Carousel from '../components/Carousel';

export default function BlomsterDekor() {
  return (
    <>
      <section className="pb-8">
        <Carousel folders="blomster" />
      </section>
      <section className="pb-8 px-8 text-center">
        <h2 className="text-2xl mb-4 font-light">Blomster & Dekor</h2>
        <p className="font-light">
          Vi tilbyr vakre blomster og dekorasjoner for bryllup og spesielle anledninger. Hvert arrangement er
          skreddersydd etter dine behov for å gjøre dagen din perfekt.
        </p>
      </section>
    </>
  );
}
