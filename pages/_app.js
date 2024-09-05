import "./globals.scss"; // Import global styles
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

// Custom App component for Next.js
const MyApp = ({ Component, pageProps }) => {
  // Optional: Scroll to the top on page change (if needed)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Meta tags for SEO and responsive design */}
      <Head>
        <title>Our Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Our amazing website description." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MyApp;
