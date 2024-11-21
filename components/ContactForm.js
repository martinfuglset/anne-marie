const ContactForm = () => (
    <form className="mt-8">
      <input type="text" placeholder="Navn" required className="w-full border border-black p-2 mb-4" />
      <input type="tel" placeholder="Telefon" required className="w-full border border-black p-2 mb-4" />
      <input type="email" placeholder="E-post" required className="w-full border border-black p-2 mb-4" />
      <textarea placeholder="Bestilling" rows="5" required className="w-full border border-black p-2 mb-4"></textarea>
      <button type="submit" className="bg-black text-white uppercase px-4 py-2 hover:bg-gray-700">
        Send inn
      </button>
    </form>
  );
  
  export default ContactForm;
  