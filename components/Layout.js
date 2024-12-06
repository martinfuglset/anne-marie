import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white text-black font-serif">
    {/* Static Header */}
    <header className="animate-fadeInUp">
      <Header />
    </header>

    {/* Main Content with Page Transitions */}
    <main className="flex-grow container mx-auto px-4">
      {children}
    </main>

    {/* Contact Form with Delay */}
    <div className="container mx-auto px-4 animate-fadeInUp delay-200">
      <ContactForm />
    </div>

    {/* Static Footer */}
    <footer className="animate-fadeInUp delay-400">
      <Footer />
    </footer>
  </div>
);

export default Layout;
