const express = require('express');
const slash = require('express-slash');
const MoviesService = require('../services/movies.js');
const passport = require('passport');

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema,
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middlewares/validationHandler');
const scopesValidationHandler = require('../utils/middlewares/scopesValidationHandler');

const cacheResponse = require('../utils/cacheResponse');
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time')

//JWT strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
    // Because you're the type of developer who cares about this sort of thing!
    app.enable('strict routing');

    // Create the router using the same routing options as the app.
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing')
    });

    // Add the `slash()` middleware after your app's `router`, optionally specify
    // an HTTP status code to use when redirecting (defaults to 301).
    app.use("/api/movies", router)
    app.use(slash());

    const moviesService = new MoviesService()

    router.get(
        "/",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
            const { tags } = req.query;
            try {
                const movies = await moviesService.getMovies({ tags });
                res.status(200).json({
                    data: movies,
                    message: 'movies listed'
                })
            } catch (err) {
                next(err);
            }
        });

    // Metodo GET
    router.get(
        "/:movieId",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async function (req, res, next) {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
            //viene en la url, como parametro en el request
            const { movieId } = req.params
            try {
                const movie = await moviesService.getMovie({ movieId });

                res.status(200).json({
                    data: movie,
                    message: 'movie retrieved'
                })

            } catch (err) {
                next(err);
            }
        });

    //Metodo POST
    router.post("/",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:movies']),
        validationHandler(createMovieSchema),
        async function (req, res, next) {
            const { body: movie } = req;

            try {
                const createdMovieId = await moviesService.createMovie({ movie });

                res.status(201).json({
                    data: createdMovieId,
                    message: 'movie created'
                })

            } catch (err) {
                next(err);
            }
        });

    //Metodo PUT
    router.put("/:movieId",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['update:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        validationHandler(updateMovieSchema),
        async function (req, res, next) {
            const { body: movie } = req;
            const { movieId } = req.params
            try {
                const updatedMovieId = await moviesService.updateMovie({ movieId, movie });

                res.status(200).json({
                    data: updatedMovieId,
                    message: 'movie updated'
                })

            } catch (err) {
                next(err);
            }
        });

    //Metodo PATCH
    router.patch(
        "/:movieId",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['update:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async function (req, res, next) {
            const { body: movie } = req;
            const { movieId } = req.params
            try {
                const modifiedMovieId = await moviesService.modifyMovieId({ movieId, movie });
                res.status(200).json({
                    data: modifiedMovieId,
                    message: 'movie modfied'
                })
            } catch (err) {
                next(err);
            }
        });
    //Metodo DELETE
    router.delete(
        "/:movieId",
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['delete:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'), 
        async function (req, res, next) {
            const { movieId } = req.params
            try {
                const deletedMovieId = await moviesService.deleteMovie({ movieId });
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
