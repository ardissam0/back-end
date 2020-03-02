const db = require('../../database/connection');

module.exports = {
    getUsers,
    register,
    findBy,
    deleteUser
}

function getUsers() {
    return db('users');
}

function register(user) {
    return db('users').insert(user, 'id');
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);
}

function deleteUser(id) {
    return db('users')
        .where('users.id', id)
        .del()
}