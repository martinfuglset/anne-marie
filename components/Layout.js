import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white text-black font-serif">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </main>

    {/* Kontakt */}
    <div className="container mx-auto px-4">
      <ContactForm />
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Layout;
