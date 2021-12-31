export const idMapping = {
  "strawberry-banana-ice-milk": "42a1ea440e8ed2473a759f4ef54ab5ae",
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
