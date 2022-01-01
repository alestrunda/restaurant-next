export const idMapping = {
  "strawberry-banana-ice-milk": "42a1ea440e8ed2473a759f4ef54ab5ae",
  "banana-bread": "c87b75a2fa4f28dbc340f7c176f57faf",
  "pizza-dough": "1b6dfeaf0988f96b187c7c9bb69a14fa",
  "whole-wheat-pancake-and-waffle-mix": "2aa69f32bb405ea0c6e29fe78c830065",
  "plum-waffle-tart": "c398e92ad22a0b1b1489144e6b89b986",
  "caramel-cake": "b66666d5c882ca199f43def8f1b8a03f",
  "pistachio-cake": "0bc10f882be73fae8bfaac8086d13d23",
  "honey-almond-date-balls": "eaab43bafe44b16705aef082120d2e40",
  "walnut-crackers": "ac886f8bb78acc41a64f02a0f100937e",
  "chocolate-truffles": "900dfc8e4b1f06180c5260983f15f11a",
  "chocolate-hazelnut-torte": "60e5f656088529547cecaf4b2c04a504",
  "cookie-dough-ice-cream": "9219b3c0524b8ae9b8efee4ad48da0bb",
  "Strawberries With Sour Cream": "4abb432a19ed768f8ee69b235bbb6684",
  "ice-cream-snowballs": "91e46404198f2263732cf43fb51a89ed",
  "apple-carrot-cupcake": "0c100a129b57c9f1bde46b04e38cf2a1",
  "lemon-cake": "71199681d0c28c1d1e0cede73eb6ec54",
};

export const api = {
  getRecipe: async (id) => {
    const response = await fetch(
      `${process.env.API_RECIPE_URL}/${idMapping[id]}?app_id=${process.env.API_RECIPE_ID}&app_key=${process.env.API_RECIPE_KEY}&type=public`
    );
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const recipeData = await response.json();
    return recipeData.recipe;
  },
};
