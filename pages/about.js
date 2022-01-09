import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";
import Introduction from "../sections/Introduction";
import Testimonials from "../sections/Testimonials";
import Recipes from "../sections/Recipes";

const About = () => (
  <Page title="About">
    <Header />
    <Introduction />
    <Testimonials />
    <Recipes />
    <Footer />
  </Page>
);

export default About;
