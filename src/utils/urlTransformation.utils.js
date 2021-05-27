const transformInUrl = (aTag) => {
    let urlResource = aTag.split('href=')[1].split('>')[0];
    return `https://github.com/${urlResource}`
}

module.exports = { transformInUrl }