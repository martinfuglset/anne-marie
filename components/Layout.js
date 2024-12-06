import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white text-black font-serif">
    {/* Header */}
    <Header />

    {/* Main Content with Page Transitions */}
    <main className="flex-grow">
      <AnimatePresence mode="wait">
        <motion.div
          key={children.key || 'default'}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">{children}</div>
        </motion.div>
      </AnimatePresence>
    </main>

    {/* Contact Form */}
    <div className="container mx-auto px-4">
      <ContactForm />
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Layout;
