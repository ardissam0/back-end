const db = require('../../database/connection.js');

module.exports = {
    getIngredients,
    addIngredient,
    editIngredient,
    deleteIngredient
}

/* GET list of ingredients */
function getIngredients() {
    return db('ingredients');
}

/* POST to add an ingredient */
function addIngredient(ingred) {
    return db('ingredients').insert(ingred, 'id');
}

/* PUT to modify an ingredient */
function editIngredient(changes, id) {
    return db('ingredients')
        .where({ id })
        .update(changes)
}

/* DELETE an ingredient */
function deleteIngredient(id) {
    return db('ingredients')
        .where({ id })
        .del();
}