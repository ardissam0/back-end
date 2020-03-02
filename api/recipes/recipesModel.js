const db = require('../../database/connection');

module.exports = {
    getRecipes,
    addRecipe,
    editRecipe,
    deleteRecipe
}

/* GET list of recipes */
function getRecipes() {
    return db('recipes');
}

/* POST to add a recipe */
function addRecipe(recipe) {
    return db('recipes').insert(recipe, 'id');
}

/* PUT to modify a recipe */
function editRecipe(changes, id) {
    return db('recipes')
        .where({ id })
        .update(changes)
}

/* DELETE a recipe */
function deleteRecipe(id) {
    return db('recipes')
        .where({ id })
        .del();
}
