const ContactForm = () => {
  return (
    <section className="px-8 pb-8">
      <h2 className="text-2xl mb-4 font-light text-center">Kontakt</h2>
      {/* Use Formspree for form handling */}
      <form
        action="https://formspree.io/f/mdkollge"
        method="POST"
        className="mt-4"
      >
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Navn"
          required
          className="w-full border border-black p-2 mb-4 rounded-none"
        />
        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          required
          className="w-full border border-black p-2 mb-4 rounded-none"
        />
        {/* Email Field */}
        <input
          type="email"
          name="_replyto"
          placeholder="E-post"
          required
          className="w-full border border-black p-2 mb-4 rounded-none"
        />
        {/* Order Details */}
        <textarea
          name="message"
          placeholder="Bestilling"
          rows="5"
          required
          className="w-full border border-black p-2 mb-4 rounded-none resize-none"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="justify-center w-full bg-black text-white px-4 py-2 hover:bg-gray-700 rounded-none"
        >
          Send inn
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
