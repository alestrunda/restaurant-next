import Decoration from "./Decoration";
import HeadingSection from "./HeadingSection";

const Testimonial = ({ children, title }) => (
  <div className="bg-black bg-opacity-60 py-16 px-16 mx-auto">
    <HeadingSection color="white">{title}</HeadingSection>
    <Decoration className="mb-8 mt-4 opacity-70" color="white" />
    <article className="font-serif font-bold text-2xl leading-loose mb-2">
      {children}
    </article>
  </div>
);

Testimonial.Footer = ({ children }) => (
  <div className="mb-2 mt-6">{children}</div>
);

export default Testimonial;
