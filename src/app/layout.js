import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: "Will Brent's Portfolio",
  description: "A portfolio highlighting the skills and experiences of Software Developer, Will Brent.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
