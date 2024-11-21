import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi'; // Feather Icons for stroke-style icons

const Footer = () => (
  <footer className="py-8 bg-white">
    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
      {/* Instagram */}
      <div className="flex items-center gap-2">
        <FiInstagram className="text-black h-5 w-5" strokeWidth={1} /> {/* Reduced stroke weight */}
        <a
          href="https://instagram.com/anne.maries_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-light"
        >
          @anne.maries_
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <FiMail className="text-black h-5 w-5" strokeWidth={1} /> {/* Reduced stroke weight */}
        <a
          href="mailto:kontakt@anne-marie.no"
          className="hover:underline font-light"
        >
          kontakt@anne-marie.no
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2">
        <FiPhone className="text-black h-5 w-5" strokeWidth={1} /> {/* Reduced stroke weight */}
        <a href="tel:+4799369435" className="hover:underline font-light">
          +47 993 69 435
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
