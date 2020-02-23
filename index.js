const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require("./routes/movies.js")
const userMoviesApi = require('./routes/userMovies.js')

//middlewares
const {
	logErrors,
	wrapErrors, 
	errorHandler 
} = require('./utils/middlewares/errorHandlers.js')

const notFoundHandler = require('./utils/middlewares/notFoundHandler.js')

//body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app)

// Catch 404
app.use(notFoundHandler);

//middlewares de error siempre van al final de las rutas
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function () {
	// eslint-disable-next-line no-console
	// const debug = require("debug")("app:server");
	// eslint-disable-next-line no-console
	console.log(`Listening http://localhost:${config.port}`)
});
