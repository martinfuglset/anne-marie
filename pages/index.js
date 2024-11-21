export default function Home() {
  return (
    <>
      <section className="pb-8">
        <img
          src="/homepagecover.png"
          alt="Homepage Cover"
          className="w-full h-auto px-8"
        />
      </section>
      <section className="pb-8 px-8">
        <h2 className="text-2xl mb-8 font-light text-center">Tjenester</h2>
        <ul className="flex flex-wrap gap-4 justify-between">
          <li className="w-full md:w-[30%]">
            <a
              href="/blomster-dekor"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <img
                src="/blomster.png"
                alt="Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="text-center p-4 font-light">Blomster & Dekor</div>
            </a>
          </li>
          <li className="w-full md:w-[30%]">
            <a
              href="/kaker"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <img
                src="/kake.png"
                alt="Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="text-center p-4 font-light">Kaker</div>
            </a>
          </li>
          <li className="w-full md:w-[30%]">
            <a
              href="/makroner-cupcakes"
              className="block border border-black w-full h-full hover:bg-gray-100 transition-all duration-300 flex flex-col"
            >
              <img
                src="/cupcakes.png"
                alt="Placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="text-center p-4 font-light">
                Makroner & Cupcakes
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-12 px-8">
        <h2 className="text-2xl mb-4 font-light text-center">Om meg</h2>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          sapien non mi condimentum sollicitudin...
        </p>
        <img
          src="/images/about-me.jpg"
          alt="About Anne Marie"
          className="mt-4"
        />
      </section>
    </>
  );
}
