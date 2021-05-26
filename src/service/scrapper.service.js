const axios = require('axios');
const { regexFileandFolder, clearResponseString } = require('../regexTest/regex.utils');
const { separateFolderAndFile } = require('../regexTest/aTagHandle.utils')
const { folderToFiles } = require('../regexTest/folder.utils')

const initialUrl = 'https://github.com/Victorasa21/github-issues-explorer';

const getFoldersAndFiles = async (url) => {
    const repositoryResponse = await axios.get(url);
    const clearedResponse = clearResponseString(repositoryResponse.data)
    const aHTMLtags = await regexFileandFolder(clearedResponse)
    const separetedFolderAndFiles = separateFolderAndFile(aHTMLtags)

    return separetedFolderAndFiles
}

const scrapperService = async () => {

    let folderAndFiles = await getFoldersAndFiles(initialUrl);

    const folders = folderAndFiles.arrayFolder;
    const files = folderAndFiles.arrayFile;

    if (!!folders.length) {

        folders.forEach(folder => {

        })
    }

    //getFileInfo vai pegar as infos 
    console.log(total)
    //se é file, extrair os dados 
    //se é folder, extrair os dados da folder

    return total
}

module.exports = scrapperService;