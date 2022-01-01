import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";
import IngredientsIntro from "../sections/IngredientsIntro";
import IngredientsSection from "../sections/Ingredients";

const Ingredients = () => (
  <Page title="Ingredients">
    <Header />
    <IngredientsIntro />
    <IngredientsSection />
    <Footer />
  </Page>
);

export default Ingredients;
