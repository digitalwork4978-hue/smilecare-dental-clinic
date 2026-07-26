import AppointmentForm from "@/components/AppointmentForm";
import GoogleMap from "@/components/GoogleMap";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
 <>
  <Navbar />
  <Hero />
  <WhyChooseUs />
  <Services />
  <Testimonials />
  <AppointmentForm />
    <GoogleMap />
  <Footer />
</>
);
}