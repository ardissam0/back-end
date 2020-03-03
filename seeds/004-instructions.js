
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step: 1,
          description: "Boil a pot of water on the stove.",
          recipe_id: 1
        },
        {
          step: 2,
          description: "Cook the chicken in a pan.",
          recipe_id: 1
        },
        {
          step: 3,
          description: "Add the alfredo sauce to the pan with the chicken.",
          recipe_id: 1
        },
        {
          step: 4,
          description: "Strain the noodles.",
          recipe_id: 1
        },
        {
          step: 5,
          description: "Mix it all together and serve!",
          recipe_id: 1
        },
        {
          step: 1,
          description: "Put the bisquick powder in a bowl.",
          recipe_id: 2
        },
        {
          step: 2,
          description: "Mix in eggs and water until blended",
          recipe_id: 2
        },
        {
          step: 3,
          description: "Begin cooking pancakes on a griddle.",
          recipe_id: 2
        },
        {
          step: 1,
          description: "Unwrap the cup of noodles.",
          recipe_id: 3
        },
        {
          step: 2,
          description: "Put it in the microwave.",
          recipe_id: 3
        },
        {
          step: 3,
          description: "Enjoy it.",
          recipe_id: 3
        }
      ]);
    });
};
