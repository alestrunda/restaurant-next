export const RECIPES = {
  "strawberry-banana-ice-milk": {
    id: "42a1ea440e8ed2473a759f4ef54ab5ae",
    title: "Strawberry Banana Ice Milk",
  },
  "banana-bread": {
    id: "c87b75a2fa4f28dbc340f7c176f57faf",
    title: "Banana Bread",
  },
  "pizza-dough": {
    id: "1b6dfeaf0988f96b187c7c9bb69a14fa",
    title: "Pizza Dough",
  },
  "whole-wheat-pancake-and-waffle-mix": {
    id: "2aa69f32bb405ea0c6e29fe78c830065",
    title: "Whole Wheat Pancake and Waffle Mix",
  },
  "plum-waffle-tart": {
    id: "c398e92ad22a0b1b1489144e6b89b986",
    title: "Plum Waffle Tart",
  },
  "caramel-cake": {
    id: "b66666d5c882ca199f43def8f1b8a03f",
    title: "Caramel Cake",
  },
  "pistachio-cake": {
    id: "0bc10f882be73fae8bfaac8086d13d23",
    title: "Pistachio Cake",
  },
  "honey-almond-date-balls": {
    id: "eaab43bafe44b16705aef082120d2e40",
    title: "Honey Almond Date Balls",
  },
  "walnut-crackers": {
    id: "ac886f8bb78acc41a64f02a0f100937e",
    title: "Walnut Crackers",
  },
  "chocolate-truffles": {
    id: "900dfc8e4b1f06180c5260983f15f11a",
    title: "Chocolate Truffles",
  },
};

export const api = {
  getRecipe: async (slug) => {
    const response = await fetch(
      `${process.env.API_RECIPE_URL}/${RECIPES[slug].id}?app_id=${process.env.API_RECIPE_ID}&app_key=${process.env.API_RECIPE_KEY}&type=public`
    );
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const recipeData = await response.json();
    return recipeData.recipe;
  },
};
