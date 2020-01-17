const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

// Tecnica TD primero los test y luego la funcionalidad 
// pero solo0 cuando tienes claro la lógica de negocio, 
// también puedes hacerlo cuando tienes un bug

//truco correr solo esta suite de test y no todos
describe('utils - buildMesage', function() {
    describe('when recieves an entity and and action', function() {
        it('should return the respective message', function() {
            const result = buildMessage('movie', 'create');
            const expected = 'movie created'
            assert.strictEqual(result, expected);
        });
    });
    describe('when recieves an entity and an action and it is a list', function() {
        it('should return the respective message with the entity in plural', function() {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected)
        });
    });
});