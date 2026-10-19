
import Navbar from "./Navbar";
import Hero from "./Hero";
import Technologies from "./Technologies";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="light"
      />
    </>
  );
}
