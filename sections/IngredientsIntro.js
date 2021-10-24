import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";

const IngredientsIntro = () => (
  <section className="bg-pattern section-shadow relative">
    <div className="container mx-auto text-center px-14 py-20">
      <HeadingSection>Praesent a molestie felis</HeadingSection>
      <Decoration className="mb-8 mt-4" />
      <p className="mb-8">
        Integer sagittis est a purus imperdiet luctus. Vestibulum id tristique
        ipsum. Ut tincidunt tempor nisi, sed gravida orci consectetur id. Mauris
        porttitor nibh vel aliquet eleifend. Integer eu odio vitae nisl
        sollicitudin elementum eget nec dui. Nunc sem est, auctor in risus a,
        condimentum ultricies ante.
      </p>
      <p className="mb-8">
        Donec eleifend laoreet sapien, a dapibus leo sodales nec. Cras luctus
        turpis sed lacus aliquam, ac pharetra nisi fermentum. Nullam justo
        augue, eleifend in venenatis et, scelerisque eu lectus. Nulla dictum
        elit felis, at ornare turpis malesuada id. Nulla quis bibendum tellus,
        et pretium libero.
      </p>
      <p>
        Nam scelerisque tellus felis. Vestibulum aliquam iaculis risus at
        fermentum. Suspendisse iaculis diam ut massa tempor malesuada. Etiam
        egestas eu ex et tempus. Praesent maximus diam libero, quis faucibus
        tortor varius sed. Praesent a molestie felis. Ut condimentum massa eget
        nunc condimentum varius vel blandit elit. In viverra a lectus a lacinia.
        Proin ornare odio tellus, vel imperdiet nisi molestie sit amet. In in
        ante id diam viverra posuere. Phasellus aliquet hendrerit sodales.
        Suspendisse at mattis purus, sed elementum nibh. Donec sollicitudin,
        arcu sit amet lobortis luctus, leo diam faucibus lorem, non tincidunt
        velit metus nec erat. Fusce eget arcu in ligula eleifend congue et nec
        massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <img className="mx-auto mt-14" src="img/content/cook.png" />
    </div>
  </section>
);

export default IngredientsIntro;
