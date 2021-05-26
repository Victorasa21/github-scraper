const scrapperService = require('../service/scrapper.service');

const scrapperController = async (req, res) => {
    try {
        const htmlBody = await scrapperService();

        return res.json({
            status: htmlBody
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'error'
        })
    }

}

module.exports = { scrapperController };