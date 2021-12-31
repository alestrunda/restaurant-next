import { api as recipeApi, idMapping } from "../../apis/recipe";
import Decoration from "../../components/Decoration";
import HeadingSection from "../../components/HeadingSection";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Page from "../layout/Page";

const TAGS_TO_SHOW = ["FAT", "CHOCDF", "PROCNT", "CHOLE"];

const Menu = ({ error, recipe }) => (
  <Page useEdamam>
    <Header />
    <div className="container mx-auto px-14 py-20">
      {error && <p className="text-red-500 text-center">{error}</p>}
      {recipe && (
        <>
          <HeadingSection as="h1">{recipe.label}</HeadingSection>
          <Decoration className="mb-8 mt-4" />
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-cursive text-xl">Ingredients:</h2>
              <ul className="list-disc pl-10 font-cursive mb-4">
                {recipe.ingredientLines.map((ingredientLine, index) => (
                  <li key={index}>{ingredientLine}</li>
                ))}
              </ul>
              <p>
                <strong>Calories</strong>: {Math.round(recipe.calories)}cal
              </p>
              <p>
                <strong>Total Time</strong>: {recipe.totalTime}
              </p>
              <p className="mb-4">
                <strong>Dish type</strong>: {recipe.dishType.join(", ")}
              </p>
              {recipe.digest.map((digestInfo, index) => {
                if (!TAGS_TO_SHOW.includes(digestInfo.tag)) return null;
                return (
                  <p key={index}>
                    <strong>{digestInfo.label}:</strong>{" "}
                    {Math.round(digestInfo.total * 10) / 10}
                    {digestInfo.unit}
                  </p>
                );
              })}
            </div>
            <div>
              <h2 className="font-cursive text-xl">Health labels:</h2>
              {recipe.healthLabels.map((label, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-gray-200 mr-2 mb-2 rounded-md text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex justify-end">
        <div id="edamam-badge" data-color="white"></div>
      </div>
    </div>
    <Footer />
  </Page>
);

export async function getStaticPaths() {
  return {
    paths: Object.keys(idMapping).map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(props) {
  let recipe = null;
  let error = null;
  try {
    recipe = await recipeApi.getRecipe(props.params.id);
  } catch (e) {
    error = e.message;
  }
  return {
    props: { error, recipe },
  };
}

export default Menu;
