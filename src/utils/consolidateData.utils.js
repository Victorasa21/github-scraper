const axios = require('axios');

const { dataFinder, clearResponseString } = require('./regex.utils');

const returnDatafromFile = async (url) => {
    const response = await axios.get(url);
    const newResponse = clearResponseString(response.data);

    const string = dataFinder(newResponse)[0].split('lines');
    let lineString = '';
    let sizeString = '';

    if (string.length === 1) {
        sizeString = string[0];
    } else {
        lineString = string[0];
        sizeString = string[1]
    }

    const isBytes = sizeString.includes('Bytes');
    const sizeExtension = sizeString.split(isBytes ? 'Bytes' : 'MB');
    const lines = lineString ? parseInt(lineString.split('>')[1].trim()) : 0;
    const extension = url.substring(url.lastIndexOf('.') + 1, url.length);
    let size = parseFloat(sizeExtension[0].split('>')[lineString ? 2 : 1].trim());

    !isBytes && (size = size * 1024);

    return {
        lines,
        size,
        extension
    }
}

module.exports = { returnDatafromFile }