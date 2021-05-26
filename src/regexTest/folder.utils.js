const axios = require('axios');
const { regexFileandFolder, clearResponseString } = require('../regexTest/regex.utils');
const { separateFolderAndFile } = require('../regexTest/aTagHandle.utils')

const folderToFiles = async (folderUrl) => {
    const folderResponse = await axios.get(folderUrl);
    const clearedResponse = clearResponseString(folderResponse.data);
    const aHTMLtags = await regexFileandFolder(clearedResponse)
    const separetedFolderAndFiles = separateFolderAndFile(aHTMLtags)

    return separetedFolderAndFiles
}

// folderToFiles('https://github.com//Victorasa21/github-issues-explorer/tree/master/.idea')

module.exports = { folderToFiles }

