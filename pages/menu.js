import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";
import MenuSection from "../sections/Menu";

const Menu = () => (
  <Page title="Menu">
    <Header />
    <MenuSection />
    <Footer />
  </Page>
);

export default Menu;
