const Footer = () => (
  <footer className="py-8 bg-white text-lg">
    <div className="container mx-auto flex flex-col items-center gap-4 sm:gap-8">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {/* Instagram */}
        <div className="flex items-center gap-2">
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
          <a
            href="mailto:riesblomster@gmail.com"
            className="hover:underline font-light"
          >
            riesblomster@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <a href="tel:+4799369435" className="hover:underline font-light">
            +47 993 69 435
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300 sm:w-10 w-10" />

      {/* Glenne Gård Section */}
      <div className="text-center">
        <p>
          I samarbeid med{' '}
          <a
            href="https://www.glennegaard.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Glenne Gård
          </a>
        </p>
        <p>Glenneveien 6A, 1408 Kråkstad, Norge</p>
      </div>
    </div>
  </footer>
);

export default Footer;
