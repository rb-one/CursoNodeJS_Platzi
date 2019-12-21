const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require("./routes/movies.js")

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
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

//middlewares de error siempre van al final de las rutas
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function () {
	// eslint-disable-next-line no-console
	console.log(`Listening http://localhost:${config.port}`)
});
