import "./globals.css";
import Head from "next/head";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { AppProvider } from "@/contexts/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const poppins = Poppins({
//   display: "swap",
//   style: "normal",
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  title: "Okehebunor-Foundation | Together we create a brighter future",
  description:
    "Empowering underserved communities through education, healthcare, and sustainable growth. Your support makes a difference in transforming lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} antialiased`}>
        {/* <body className={`antialiased`}> */}
        <AppProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
