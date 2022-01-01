import ButtonOpacity from "../components/ButtonOpacity";
import Decoration from "../components/Decoration";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";
import Contact from "../sections/Contact";
import Ingredients from "../sections/Ingredients";
import Introduction from "../sections/Introduction";
import Menu from "../sections/Menu";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <Page>
      <Header isOverlay>
        <div className="container mx-auto text-center px-14 py-32 relative z-10">
          <h1 className="font-cursive leading-normal text-shadow-md text-3xl xl:text-8xl xl:leading-tight lg:text-7xl lg:leading-tight md:text-5xl md:leading-normal sm:text-4xl sm:leading-normal">
            the right ingredients
            <br />
            for the right food
          </h1>
          <Decoration className="mt-10 mb-14" color="white" size={8} />
          <ButtonOpacity className="inline-block mx-3 mb-3" href="/contact">
            book a table
          </ButtonOpacity>
          <ButtonOpacity className="inline-block mx-3 mb-3" href="/menu">
            see the menu
          </ButtonOpacity>
        </div>
      </Header>

      <Introduction />

      <Ingredients />

      <Menu featuredOnly />

      <Testimonials />

      <Contact />

      <Footer />
    </Page>
  );
}
