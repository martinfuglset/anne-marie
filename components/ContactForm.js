const ContactForm = () => (
  <section className="px-8 pb-8">
    <h2 className="text-2xl mb-4 font-light text-center">Kontakt</h2>
    <form className="mt-4">
      <input
        type="text"
        placeholder="Navn"
        required
        className="w-full border border-black p-2 mb-4"
      />
      <input
        type="tel"
        placeholder="Telefon"
        required
        className="w-full border border-black p-2 mb-4"
      />
      <input
        type="email"
        placeholder="E-post"
        required
        className="w-full border border-black p-2 mb-4"
      />
      <textarea
        placeholder="Bestilling"
        rows="5"
        required
        className="w-full border border-black p-2 mb-4"
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 hover:bg-gray-700"
      >
        Send inn
      </button>
    </form>
  </section>
);

export default ContactForm;
