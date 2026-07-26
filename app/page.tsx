import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import GoogleMap from "@/components/GoogleMap";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <AppointmentForm />
      <GoogleMap />
      <FloatingButtons />
      <Footer />
    </>
  );
}