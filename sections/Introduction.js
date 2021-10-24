import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";

const Introduction = () => (
  <section className="bg-pattern section-shadow relative">
    <div className="container mx-auto md:grid grid-cols-12 items-center text-center px-14 py-20">
      <div className="col-span-5 md:px-6">
        <HeadingSection>Just the right food</HeadingSection>
        <Decoration className="mb-8 mt-4" />
        <p>
          If you’ve been to one of our restaurants, you’ve seen – and tasted –
          what keeps our customers coming back for more. Perfect materials and
          freshly baked food, delicious Lambda cakes, muffins, and gourmet
          coffees make us hard to resist! Stop in today and check us out!
        </p>
        <img className="mx-auto mt-14" src="img/content/cook.png" />
      </div>
      <div className="col-span-7">
        <img className="mx-auto" src="img/content/dish.png" />
      </div>
    </div>
  </section>
);

export default Introduction;
