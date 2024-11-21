export default function Home() {
  return (
    <>
      <section>
        <h2 className="text-2xl mb-4 font-light">Tjenester</h2>
        <ul className="space-y-2">
          <li>
            <a href="/blomster-dekor" className="hover:underline font-light">
              Blomster & Dekor
            </a>
          </li>
          <li>
            <a href="/kaker" className="hover:underline font-light">
              Kaker
            </a>
          </li>
          <li>
            <a href="/makroner-cupcakes" className="hover:underline font-light">
              Makroner & Cupcakes
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl mb-4 font-light">Om meg</h2>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sapien non mi condimentum sollicitudin...
        </p>
        <img src="/images/about-me.jpg" alt="About Anne Marie" className="mt-4" />
      </section>
    </>
  );
}
