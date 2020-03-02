const db = require('../../database/connection');

module.exports = {
    getSteps,
    addStep
}

function getSteps() {
    return db('instructions');
}

function addStep(step) {
    return db('instructions').insert(step, 'id');
}