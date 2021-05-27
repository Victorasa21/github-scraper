const axios = require('axios');

const { regexFileandFolder, clearResponseString } = require('../utils/regex.utils');
const { separateFolderAndFile } = require('../utils/handleFolderAndFile.utils');
const { returnDatafromFile } = require('../utils/consolidateData.utils');

const getFoldersAndFiles = async (url) => {
    const repositoryResponse = await axios.get(url);
    const clearedResponse = clearResponseString(repositoryResponse.data)
    const aHTMLtags = await regexFileandFolder(clearedResponse)
    const separetedFolderAndFiles = separateFolderAndFile(aHTMLtags);

    return separetedFolderAndFiles;
}

const getFileInfo = async (folder) => {

    let folderAndFiles = await getFoldersAndFiles(folder);

    let folders = folderAndFiles.arrayFolder;
    let files = folderAndFiles.arrayFile;

    let filesFormat = await Promise.all(files.map(async file => await returnDatafromFile(file)));

    if (!!folders.length) {

        for (let i = 0; i < folders.length; i++) {

            const result = await getFileInfo(folders[i]);
            filesFormat = [...filesFormat, ...result];
        }
    }

    return filesFormat;
}

const scrapperService = async (folder, extensionsToIgnore = []) => {

    let result = await getFileInfo(folder);

    return result.reduce((acc, file) => {
        const findedFile = acc.find(item => item.extension === file.extension);

        if (findedFile) {
            findedFile.lines += file.lines;
            findedFile.size += file.size;
            findedFile.count += 1;

            return [...acc];
        }

        return [...acc, { ...file, count: 1 }];
    }, []).filter(file => !extensionsToIgnore.includes(file.extension));
}

module.exports = scrapperService;