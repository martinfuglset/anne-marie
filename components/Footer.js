const Footer = () => (
    <footer className="py-8">
      <div className="container mx-auto text-center">
        <p className="font-light mb-2">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </p>
        <p className="font-light mb-2">
          <a href="mailto:your-email@example.com" className="hover:underline">
            your-email@example.com
          </a>
        </p>
        <p className="font-light">
          <a href="tel:+1234567890" className="hover:underline">
            +12 345 678 90
          </a>
        </p>
      </div>
    </footer>
  );
  
  export default Footer;
  