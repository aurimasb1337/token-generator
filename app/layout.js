import { Sofia_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Token Generator",
  description: "Generate your own token!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofia.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
