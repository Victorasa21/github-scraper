const { transformInUrl } = require('./urlTransformation.utils')

const separateFolderAndFile = (array) => {
    let arrayFolder = [];
    let arrayFile = [];
    array.forEach(item => {
        item.includes('tree') ? arrayFolder.push(transformInUrl(item)) : arrayFile.push(transformInUrl(item))
    })

    return {
        arrayFolder,
        arrayFile,
    }
}

module.exports = {
    separateFolderAndFile
}