const { config } = require('../config');

function cacheResponse(res, seconds) {
    if (!config.dev) {
        res.set("Cache-Control", `public, max-age=${seconds}`)
    }
}

//NO TODAS LAS RUTAS DEBEN TENER CACHE, SOLO AQUELLAS DONDE ESTAMOS
// REQUIRIENDO RECURSOS

module.exports = cacheResponse;


