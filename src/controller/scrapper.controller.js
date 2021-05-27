const scrapperService = require('../service/scrapper.service');

const scrapperController = async (req, res) => {

    const { gitRepository, extensionsToIgnore } = req.body;

    if (!gitRepository) return res.status(400).json({ status: 'error', message: 'please provide some github repository' });

    try {
        const htmlBody = await scrapperService(gitRepository, extensionsToIgnore);
        return res.status(200).json({
            status: 'success',
            data: htmlBody
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'error',
            message: error
        })
    }

}

module.exports = { scrapperController };