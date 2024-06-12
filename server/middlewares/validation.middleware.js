"use strict";

function validateRequestFields(req, res, next) {
    const requiredFields = ['username', 'password'];

    const missingFields = [];
    requiredFields.forEach(field => {
        if (!(field in req.body)) {
            missingFields.push(field);
        }
    });

    if (missingFields.length > 0) {
        return res.status(400).json({ message: `Missing fields: ${missingFields.join(', ')}` });
    }

    next();
}

export { validateRequestFields };