
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: "Chicken",
          description: "White meat"
        },
        {
          name: "Fettuccine Noodles",
          description: "Long noodles"
        },
        {
          name: "Alfredo Sauce",
          description: "Generic"
        },
        {
          name: "Ramen Noodles",
          description: "Cup of noodle form"
        },
        {
          name: "Bisquick Pancake Mix"
        },
        {
          name: "Eggs",
          description: "Cage free"
        }
      ]);
    });
};
