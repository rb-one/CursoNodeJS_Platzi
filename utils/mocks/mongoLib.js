const sinon = require('sinon');
//sinon inyecta propiedades que determina si los stubmocks son llamados o no

const { moviesMock, filteredMoviesMock } = require("./movies")


//una de los propiedades de los stubs, cuando se llame con ciertos argumentos devuelva cierta respuesta 
const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags : { $in: ['Drama']}};
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id)

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query)
    }



    create(collection, data) {
        return createStub(collection, data);
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};
