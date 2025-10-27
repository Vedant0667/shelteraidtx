import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import HowItWorks from "@/components/HowItWorks";
import QuickDonate from "@/components/QuickDonate";
import Testimonials from "@/components/Testimonials";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Impact />
        <HowItWorks />
        <QuickDonate />
        <Testimonials />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
