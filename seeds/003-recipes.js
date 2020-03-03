
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          title: "Chicken Alfredo",
          source: "Great Grandma",
          category_id: 3,
          user_id: 3
        },
        {
          title: "Pancakes",
          source: "Aunt Ethel",
          category_id: 1,
          user_id: 3
        },
        {
          title: "Ramen Noodles",
          source: "College",
          category_id: 2,
          user_id: 2
        }
      ]);
    });
};
