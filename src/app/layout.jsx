import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { AppProvider } from "@/contexts/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const title = "Okehebunor-Foundation | Together we create a brighter future";
const description =
  "Empowering underserved communities through education, healthcare, and sustainable growth. Your support makes a difference in transforming lives.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/assets/images/homeHeroBanner1.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/images/homeHeroBanner1.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
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
