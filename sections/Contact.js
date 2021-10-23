import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import FormContact from "../containers/FormContact";

const Contact = () => (
  <section className="bg-pattern section-shadow relative">
    <div className="container mx-auto px-14 py-20">
      <div className="grid grid-cols-12 gap-12 items-center">
        <div className="col-span-3">
          <img src="img/content/image1.png" />
        </div>
        <div className="col-span-3">
          <img src="img/content/image2.png" />
        </div>
        <div className="col-span-6 px-6">
          <div className="text-center mb-10">
            <HeadingSection>We are here for you</HeadingSection>
            <Decoration className="mb-8 mt-4" />
            <p>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food.
            </p>
            <p>
              Delicious Lambda cakes, muffins, and gourmet coffees make us hard
              to resist! Stop in today and check us out! Perfect materials and
              freshly baked food.
            </p>
          </div>
          <FormContact />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
