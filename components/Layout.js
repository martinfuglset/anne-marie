import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white text-black font-serif">
    {/* Header */}
    <Header />

    {/* Main Content - Centered */}
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center container mx-auto px-4">
        {children}
      </div>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);

export default Layout;
