
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          quantity: 2,
          units: "breasts",
          recipe_id: 1,
          ingredient_id: 1
        },
        {
          quantity: 1,
          units: "box",
          recipe_id: 1,
          ingredient_id: 2
        },
        {
          quantity: 1,
          units: "jar",
          recipe_id: 1,
          ingredient_id: 3
        },
        {
          quantity: 2,
          units: "cups",
          recipe_id: 2,
          ingredient_id: 5
        },
        {
          quantity: 2,
          units: "individual",
          recipe_id: 2,
          ingredient_id: 6
        },
        {
          quantity: 1,
          units: "cup",
          recipe_id: 3,
          ingredient_id: 4
        }
      ]);
    });
};
