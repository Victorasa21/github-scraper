const axios = require('axios');
const { dataFinder, clearResponseString } = require('./regex.utils')

const url = "https://github.com//Victorasa21/github-issues-explorer/blob/master/.editorconfig";

const returnDatafromFile = async (url) => {
    const response = await axios.get(url);
    const newResponse = clearResponseString(response.data);

    const [lineString, sizeString] = dataFinder(newResponse)[0].split('lines');

    const line = parseInt(lineString.split('>')[1].trim());
    const size = parseInt(sizeString.split('Bytes')[0].split('>')[2].trim())

    return {
        lines: line,
        size
    }
}

const returnDataComputedfromArray = async (urlArray) => {
    const response = await axios.get(url);
    const newResponse = clearResponseString(response.data);

    const [lineString, sizeString] = dataFinder(newResponse)[0].split('lines');

    const line = parseInt(lineString.split('>')[1].trim());
    const size = parseInt(sizeString.split('Bytes')[0].split('>')[2].trim())

    return {
        lines: line,
        size
    }
}

returnDatafromFile(url)