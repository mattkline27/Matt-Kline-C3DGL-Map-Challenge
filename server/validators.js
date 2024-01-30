const {body, validationResult} = require("express-validator")

module.exports.validateNewLocation = (locationBodySchema) => {
    return async(req, res, next) => {
        await body(locationBodySchema?.latitude).notEmpty({ignore_whitespace: true}).withMessage('Latitude cannot be empty').isFloat({min: -90, max: 90}).withMessage('Latitude must be a number between -90 and 90').run(req);
        await body(locationBodySchema?.longitude).notEmpty({ignore_whitespace: true}).withMessage('Longitude cannot be empty').isFloat({min: -180, max: 180}).withMessage('Longitude must be a number between -180 and 180').run(req);
        await body(locationBodySchema?.name).notEmpty({ignore_whitespace: true}).withMessage('Name cannot be empty').isString().withMessage('Name must be a string').run(req);

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next()
        }

        const errorString = errors.array().map((error) => error.msg).join(', ')

        return res.status(400).json({ error: errorString})
    }
}
