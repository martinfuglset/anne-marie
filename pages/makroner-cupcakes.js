import React from 'react';
import Carousel from '../components/Carousel';

export default function MakronerCupcakes() {
  return (
    <>
      <section className="pb-8">
        <Carousel folders="makroner" />
      </section>
      <section className="pb-8 px-8">
        <h2 className="text-2xl mb-4 font-light">Makroner & Cupcakes</h2>
        <p className="font-light">
          Perfekte små søtsaker for bryllup og spesielle anledninger. Velg mellom et stort utvalg av smaker og design
          for å imponere gjestene dine.
        </p>
      </section>
    </>
  );
}
