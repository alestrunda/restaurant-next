import ButtonOpacity from "../components/ButtonOpacity";
import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import Thumbnail from "../components/Thumbnail";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Page from "./layout/Page";
import Contact from "../sections/Contact";
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
          <ButtonOpacity className="mx-3">book a table</ButtonOpacity>
          <ButtonOpacity className="mx-3">see the menu</ButtonOpacity>
        </div>
      </Header>

      <section className="bg-pattern section-shadow relative">
        <div className="container mx-auto md:grid grid-cols-12 items-center text-center px-14 py-20">
          <div className="col-span-5 md:px-6">
            <HeadingSection>Just the right food</HeadingSection>
            <Decoration className="mb-8 mt-4" />
            <p>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <img className="mx-auto mt-14" src="img/content/cook.png" />
          </div>
          <div className="col-span-7">
            <img className="mx-auto" src="img/content/dish.png" />
          </div>
        </div>
      </section>

      <section className="bg-section-2 bg-center bg-cover text-white text-center">
        <div className="container mx-auto grid grid-cols-2 px-14 py-20">
          <div className="col-start-2 bg-black bg-opacity-60 py-16 px-16">
            <HeadingSection color="white">Fine ingredients</HeadingSection>
            <Decoration className="mb-8 mt-4" color="white" />
            <p>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <div className="flex justify-center gap-12 mt-16 mb-2">
              <Thumbnail src="img/ingredients/1.png" />
              <Thumbnail src="img/ingredients/2.png" />
              <Thumbnail src="img/ingredients/3.png" />
            </div>
          </div>
        </div>
      </section>

      <Menu featuredOnly />

      <Testimonials />

      <Contact />

      <Footer />
    </Page>
  );
}
