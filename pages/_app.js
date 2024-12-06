import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'; // For managing <head> metadata
import Layout from '../components/Layout';
import '../styles/globals.css'; // Ensure TailwindCSS is imported

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      {/* Global Metadata for SEO */}
      <Head>
        <title>Anne Marie</title> {/* Default title for all pages */}
        <meta name="description" content="Welcome to Anne Marie's website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Anne Marie" />
        <meta
          property="og:description"
          content="Discover the elegance and beauty of Anne Marie's website."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anne-marie.no" />
        <meta property="og:image" content="/og-image.png" /> {/* Update with your image */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Layout Wrap to Ensure Consistent Layout Across Pages */}
      <Layout>
        {/* Page Content with Animation */}
        <div
          className={`transform transition-all duration-500 ${
            loading ? 'animate-fadeOutDown' : 'animate-fadeInUp'
          }`}
        >
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
