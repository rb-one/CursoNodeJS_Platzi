const moviesMock = [
	{
			"id": "55419c54-bad5-4b35-a9cb-32e64c949102",
			"title": "Even Money",
			"year": 1990,
			"cover": "http://dummyimage.com/158x242.png/dddddd/000000",
			"description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
			"duration": 1931,
			"contentRating": "G",
			"source": "http://un.org/ut.jsp",
			"tags": [
					"Adventure|Drama|War",
					"Comedy|Drama|Mystery|Romance",
					"Drama|Romance|War",
					"Adventure|Comedy|Sci-Fi"
			]
	},
	{
			"id": "e7bf26ca-02ae-4305-8291-f7357d542345",
			"title": "The Second Best Exotic Marigold Hotel",
			"year": 1995,
			"cover": "http://dummyimage.com/234x175.png/cc0000/ffffff",
			"description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
			"duration": 2038,
			"contentRating": "G",
			"source": "http://slate.com/eget.html",
			"tags": [
					"Animation|Children|Musical|IMAX",
					"Adventure|Drama"
			]
	},
	{
			"id": "452254b3-a5bb-46dd-960b-5ebbca6d8d30",
			"title": "Zerophilia",
			"year": 2008,
			"cover": "http://dummyimage.com/245x217.bmp/cc0000/ffffff",
			"description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
			"duration": 1941,
			"contentRating": "PG-13",
			"source": "http://desdev.cn/luctus/tincidunt.js",
			"tags": [
					"Documentary",
					"Comedy|Drama|Romance"
			]
	},
	{
			"id": "74b8f9d3-360c-4539-93e5-8e427e03aad7",
			"title": "The Great Raid",
			"year": 1994,
			"cover": "http://dummyimage.com/123x168.bmp/cc0000/ffffff",
			"description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
			"duration": 2054,
			"contentRating": "PG-13",
			"source": "http://multiply.com/volutpat/eleifend/donec/ut/dolor/morbi.jpg",
			"tags": [
					"Comedy",
					"Drama|Sci-Fi",
					"Comedy"
			]
	},
	{
			"id": "6e5a544b-b5bd-4117-81f0-3fdf4f372be2",
			"title": "Mexican Hayride",
			"year": 2010,
			"cover": "http://dummyimage.com/218x168.png/cc0000/ffffff",
			"description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
			"duration": 2035,
			"contentRating": "PG-13",
			"source": "http://icio.us/elit/ac.jpg",
			"tags": [
					"Comedy"
			]
	},
	{
			"id": "831b8b4b-7e8c-40cf-9438-6d23158359c5",
			"title": "Clerks II",
			"year": 1989,
			"cover": "http://dummyimage.com/155x192.png/ff4444/ffffff",
			"description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
			"duration": 1982,
			"contentRating": "PG",
			"source": "http://economist.com/libero.html",
			"tags": [
					"Comedy",
					"Western"
			]
	},
	{
			"id": "30908f6e-d2e2-4a59-ab8b-fb9724fc8e31",
			"title": "Driven to Kill",
			"year": 1994,
			"cover": "http://dummyimage.com/194x235.png/ff4444/ffffff",
			"description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
			"duration": 1951,
			"contentRating": "NC-17",
			"source": "https://plala.or.jp/luctus/nec.xml",
			"tags": [
					"Comedy|Romance",
					"Drama"
			]
	},
	{
			"id": "e9a24bcc-3bcd-4fac-a01a-f25ed808a0ea",
			"title": "Israeli Intelligence (Hamosad Hasagur)",
			"year": 1994,
			"cover": "http://dummyimage.com/220x103.jpg/dddddd/000000",
			"description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
			"duration": 2003,
			"contentRating": "PG",
			"source": "http://cnn.com/auctor.xml",
			"tags": [
					"Action|Adventure|Crime",
					"Action|Mystery|Thriller",
					"Children|Comedy|Drama"
			]
	},
	{
			"id": "42ad1d1d-c03f-44f4-895c-5e20b050b831",
			"title": "Talk to Me",
			"year": 2002,
			"cover": "http://dummyimage.com/229x238.jpg/ff4444/ffffff",
			"description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
			"duration": 2050,
			"contentRating": "G",
			"source": "http://wordpress.org/ut/massa/quis.xml",
			"tags": [
					"Documentary",
					"Horror"
			]
	},
	{
			"id": "093866e1-63a8-4dff-b0b1-5d93dc3816ae",
			"title": "Sinbad: Legend of the Seven Seas",
			"year": 2008,
			"cover": "http://dummyimage.com/205x199.bmp/5fa2dd/ffffff",
			"description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
			"duration": 2020,
			"contentRating": "NC-17",
			"source": "https://homestead.com/cursus/id/turpis/integer/aliquet/massa/id.json",
			"tags": [
					"Comedy|Drama",
					"Action|Crime|IMAX",
					"Comedy|Documentary",
					"Drama",
					"Drama|Horror"
			]
	}
];


//no hacemos que llege a los servicios solo a las rutas
// eso con sinon y proxiquire
function filteredMoviesMock(tag) {
	return moviesMock.filter(movie => movie.tags.includes(tag))
}

//llamamos a los servicios
class MoviesServiceMock {
	async getMovies() {
		return Promise.resolve(moviesMock)
	}

	async createMovie() {
		return Promise.resolve(moviesMock[0]);
	}
}

module.exports = {
	moviesMock,
	filteredMoviesMock,
	MoviesServiceMock
};
