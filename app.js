/* declaração de variaveis */
const express = require('express')
const router_fii = require('./router/router_fii')

const app = express()
/* chamar as rotas */
app.use(router_fii)


/* routers */



/* start server */
    /* porta do servidor */
    const portaServidor = 3000
app.listen(portaServidor)