const { transformInUrl } = require('./files.util')

const separateFolderAndFile = (array) => {
    let arrayFolder = [];
    let arrayFile = [];
    array.forEach(item => {
        item.includes('tree') ? arrayFolder.push(transformInUrl(item)) : arrayFile.push(transformInUrl(item))
    })

    //se é folder 
    return {
        arrayFolder,
        arrayFile,
    }
}

module.exports = {
    separateFolderAndFile
}