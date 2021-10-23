import Head from "../components/Head";
import Header from "../components/Header";
import ContactSection from "../sections/Contact";
import Footer from "../sections/Footer";

const Contact = () => (
  <div className="flex flex-col justify-center min-h-screen">
    <Head />
    <Header />
    <ContactSection />
    <Footer />
  </div>
);

export default Contact;
