const express = require('express');
const app = express();
const { scrapperController } = require('./controller/scrapper.controller')

app.post('/', scrapperController);

var port_number = server.listen(process.env.PORT || 3333);

app.listen(port_number, () => {
    console.log(`Rodando na porta ${port_number}`)
})
