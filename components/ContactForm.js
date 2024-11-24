// Define a variable for form width
const FORM_WIDTH = "w-full sm:w-[90%] md:w-[60%] lg:w-[60%]"; // Adjust width based on breakpoints

const InputField = ({ type, name, placeholder, required = true }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    className="w-full border border-black p-2 mb-4 rounded-none"
  />
);

const TextAreaField = ({ name, placeholder, rows, required = true }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    rows={rows}
    required={required}
    className="w-full border border-black p-2 mb-4 rounded-none resize-none"
  ></textarea>
);

const ContactForm = () => {
  return (
    <section className="flex justify-center px-8 pb-8">
      <div className={`w-full ${FORM_WIDTH}`}>
        <h2 className="text-2xl mb-4 font-light text-center">Kontakt</h2>
        {/* Form with Formspree integration */}
        <form
          action="https://formspree.io/f/mdkollge"
          method="POST"
          className="mt-4"
        >
          {/* Input Fields */}
          <InputField type="text" name="name" placeholder="Navn" />
          <InputField type="tel" name="phone" placeholder="Telefon" />
          <InputField type="email" name="_replyto" placeholder="E-post" />

          {/* Textarea Field */}
          <TextAreaField name="message" placeholder="Bestilling" rows="5" />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 hover:bg-gray-700 rounded-none"
          >
            Send inn
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
