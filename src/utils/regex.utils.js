const clearResponseString = (string) => string.replace(/(\r\n|\n|\r|\")/gm, "");

const regexFileandFolder = async (string) => {
    const regexTopLink = /<a class=js-navigation-open Link--primary+.*?<\/a>/g;
    return string.match(regexTopLink);
}

const dataFinder = (string) => {
    const regexData = /text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1+.*?<\/div>/g;
    return string.match(regexData);
}

module.exports = { regexFileandFolder, clearResponseString, dataFinder };