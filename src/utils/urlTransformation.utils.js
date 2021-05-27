const transformInUrl = (aTag) => {
    let urlResource = aTag.split('=')[4].split('>')[0];
    return `https://github.com/${urlResource}`
}

module.exports = { transformInUrl }