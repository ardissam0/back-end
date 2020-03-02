
exports.up = function (knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};

exports.down = function (knex) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        // quantity
        tbl.integer('quantity')
            .notNullable()

        // units
        tbl.string('units')
            .notNullable()

        // foreign key to recipe id
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        // foreign key to ingredient id
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};
