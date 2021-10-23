import Testimonial from "../components/Testimonial";

const Testimonials = () => (
  <section className="bg-section-3 bg-center bg-cover">
    <div className="container grid grid-cols-12 mx-auto px-14 py-20 text-white text-center">
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
  </section>
);

export default Testimonials;
