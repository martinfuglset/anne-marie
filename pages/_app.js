import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Anne Marie</title>
        <meta name="description" content="Welcome to Anne Marie's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            transition={{ duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
