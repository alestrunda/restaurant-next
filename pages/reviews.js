import ReviwesSection from "../sections/Reviewes";
import Testimonials from "../sections/Testimonials";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";

const Reviews = () => (
  <Page title="Reviewes">
    <Header />
    <ReviwesSection />
    <Testimonials />
    <Footer />
  </Page>
);

export default Reviews;
