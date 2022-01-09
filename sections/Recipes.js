import Link from "next/link";
import { RECIPES } from "../apis/recipe";
import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";

const Recipes = () => {
  return (
    <section className="bg-pattern section-shadow relative">
      <div className="container mx-auto text-center px-14 py-20">
        <HeadingSection>Our recipes</HeadingSection>
        <Decoration className="mb-8 mt-4" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
          consectetur leo. Praesent ornare, tortor eu venenatis gravida, urna
          urna lobortis erat, eget dictum leo mauris vel ante. Cras eget sodales
          ex, vitae consequat erat. Aenean vel sodales magna. Vivamus consequat
          aliquet massa sit amet laoreet. Integer vulputate nunc ut feugiat
          vehicula. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc eget urna laoreet, pellentesque urna sed, iaculis enim.
          Integer auctor velit eget pretium vestibulum.
        </p>
        <p>
          Praesent interdum neque at diam finibus, tristique rhoncus erat
          facilisis. Curabitur facilisis magna euismod malesuada venenatis.
          Fusce finibus lectus elementum, eleifend ante vitae, vestibulum lacus.
        </p>
        <ul className="text-lg mt-8">
          {Object.keys(RECIPES).map((slug) => (
            <li className="mb-2" key={RECIPES[slug].id}>
              <Link href={`/recipes/${slug}`}>
                <a className="hover:text-yellow-500 transition-colors">
                  {RECIPES[slug].title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Recipes;
