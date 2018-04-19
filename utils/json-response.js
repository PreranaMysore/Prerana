'use strict';

const config = require('./../config');
const responseCodes = require('./../helpers/response-codes');


module.exports = function(res, error, payload) {
    let status;
    if (!!error) {
        status = error.code || responseCodes.BadRequest;
    } else {
        status = responseCodes.OK;
    }
    res.status(status).send(JSON.stringify({
        error: error,
        payload: payload,
        status: status
    }));
};

