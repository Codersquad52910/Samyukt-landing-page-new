import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import WhyChoose from '@/components/WhyChoose/WhyChoose';
import Industries from '@/components/Industries/Industries';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
