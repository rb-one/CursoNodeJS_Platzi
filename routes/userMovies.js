const express = require('express');

//imports Services
const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../utils/middlewares/validationHandler');

//imports Schemas
const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMoviesApi(app) {
  const router = express.Router();
  app.user('api/user-movies', router);

  //llamamos al servicio
  const userMoviesService = new UserMoviesService()

  router.get('/', validationHandler({ userId: userIdSchema }, 'query'),
    async function (req, res, next) {
      const { userId } = req.require;
      try {
        const userMovies = await userMoviesService.getUserMovies({ userId })

        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        })
      } catch (error) {
        next(error)
      }
    });

  router.post('/', validationHandler(createUserMovieSchema), async function (req, res, next) {
    const { body: userMovie } = req;

    try {
      const createUserMovieId = await userMoviesService.createUserMovie({
        userMovie
      })

      res.status(200).json({
        data: createUserMovieId,
        message: 'user movie created'

      })
    } catch (error) {
      next(error)
    }
  });

  router.delete('/', validationHandler({ userMovieId: movieIdSchema }, 'params'),
    async function (req, res, next) {

      const { userMovieId } = req.params;

      try {
        const deletedUserMovieId = await userMoviesService.deleteUserMovie({ userMovieId })

        res.status(200).json({
          data: deletedUserMovieId,
          message: 'user movie deleted'
        })
      }
      catch (error) {
        next(error)
      }

    })
}

module.exports = userMoviesApi;
