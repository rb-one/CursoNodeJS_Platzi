const express = require('express');
//mocks archivos de datos falsos
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router)

    //lo siguiente es codigo asincrono siempre
    router.get("/", async function(req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
            
        } catch (err) {
            next(err);
        }
    });
    
    // Metodo GET
    router.get("/:movieId", async function (req, res, next) {
        try {
            const movie = await Promise.resolve(moviesMock[0]);

            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })

        } catch (err) {
            next(err);
        }
    });

    //Metodo POST
    router.post("/", async function (req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            })

        } catch (err) {
            next(err);
        }
    });

    //Metodo PUT
    router.put("/:movieId", async function (req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })

        } catch (err) {
            next(err);
        }
    });
    //Metodo DELETE
    router.delete("/:movieId", async function (req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie erased'
            })

        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;
