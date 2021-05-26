const express = require('express');
const app = express();
const { scrapperController } = require('./controller/scrapper.controller')

app.post('/', scrapperController);

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
