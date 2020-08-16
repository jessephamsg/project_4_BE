const kidServices = require('../services/kidServices');
const responseFormatter = require('../services/shared/responseFormatter');

module.exports = {
    
    async createOneKid(req, res) {
        try {
            const {
                parentID,
                kidName,
                kidIcon,
                kidMaxScreenTime,
                kidIsEmailNotif,
                kidBDay,
                kidAge
            } = req.body;

            await kidServices.createOneKid({
                parentID,
                kidName,
                kidIcon,
                kidMaxScreenTime,
                kidIsEmailNotif,
                kidBDay,
                kidAge
            })
            responseFormatter.responseOK(req, res, 'One Kid successfully added!');
        } catch (err) {
            responseFormatter.responseErr(req, res, err);
        }
    },
}