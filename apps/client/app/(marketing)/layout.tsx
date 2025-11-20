import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MarketingLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
