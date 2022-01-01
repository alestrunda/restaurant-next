import Testimonial from "../components/Testimonial";

const Testimonials = () => (
  <section className="bg-section-3 bg-center bg-cover">
    <div className="container lg:grid lg:grid-cols-12 mx-auto px-14 py-20 text-white text-center">
      <div className="xl:col-start-3 xl:col-span-8 lg:col-start-2 lg:col-span-10">
        <Testimonial title="Guest Reviews">
          <p>
            If you’ve been to one of our restaurants, you’ve seen – and tasted –
            what keeps our customers coming back for more. Perfect materials and
            freshly baked food, delicious Lambda cakes, muffins, and gourmet
            coffees make us hard to resist! Stop in today and check us out!
          </p>
          <Testimonial.Footer>- food inc, New York</Testimonial.Footer>
        </Testimonial>
      </div>
    </div>
  </section>
);

export default Testimonials;
