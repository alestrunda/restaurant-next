import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import Thumbnail from "../components/Thumbnail";

const Ingredients = () => (
  <section className="bg-section-2 bg-center bg-cover text-white text-center">
    <div className="container mx-auto lg:grid lg:grid-cols-2 px-14 py-20">
      <div className="lg:col-start-2 bg-black bg-opacity-60 py-16 px-16">
        <HeadingSection color="white">Fine ingredients</HeadingSection>
        <Decoration className="mb-8 mt-4" color="white" />
        <p>
          If you’ve been to one of our restaurants, you’ve seen – and tasted –
          what keeps our customers coming back for more. Perfect materials and
          freshly baked food, delicious Lambda cakes, muffins, and gourmet
          coffees make us hard to resist! Stop in today and check us out!
        </p>
        <div className="flex flex-wrap justify-center gap-12 mt-16 mb-2">
          <Thumbnail src="img/ingredients/1.png" />
          <Thumbnail src="img/ingredients/2.png" />
          <Thumbnail src="img/ingredients/3.png" />
        </div>
      </div>
    </div>
  </section>
);

export default Ingredients;
