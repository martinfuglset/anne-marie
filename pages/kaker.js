import React from 'react';
import Carousel from '../components/Carousel';

export default function Kaker() {
  return (
    <>
      <section className="pb-8">
        <Carousel folders="kaker" />
      </section>
      <section className="pb-8 px-8 text-center">
        <h2 className="text-2xl mb-4 font-light">Kaker</h2>
        <p className="font-light">
          Våre bryllupskaker er laget med kjærlighet og de beste ingrediensene. Vi lager alt fra klassiske kaker til
          moderne design som passer til ditt tema og smak.
        </p>
      </section>
    </>
  );
}
