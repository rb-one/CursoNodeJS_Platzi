const assert = require('assert');
const proxyquire = require('proxyquire');
//en lugar de que traiga el paquete real traiga los mock


const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

//Escribimos nuestros Test con describe
describe('routes - movies', function () {
    //la ruta es intervenida por proxyquire
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });
    //hacemos un request especifico a esta ruta a testear
    const request = testServer(route);

    describe('GET /movies', function () {
        //primer test -> usando it para cada caso
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
        });
        //segundo test GET ALL
        it('should respond with the list of movies', function (done) {
            request.get('/api/movies/').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });
                done();
            });
        });
    });

    //test get /:movieId
    describe('GET /movies/:movieId', function () {
        it('should respond with status 200 testing one movie', function (done) {
            let movieId = '55419c54-bad5-4b35-a9cb-32e64c949102'
            // let movieId = '55419c54bad54b35a9cb32e64c949102/'
            request.get('/api/movies' + movieId)
                .expect(200, done);
        });
    });

});

