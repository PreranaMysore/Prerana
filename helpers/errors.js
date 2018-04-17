'use strict';

const _ = require('underscore');
const responseCodes = require('./response-codes');


function PreranaError(message, code, name='PreranaError') {
    this.name = name;
    this.message = message || 'Default Message';
    this.code = code;
    this.stack = (new Error()).stack;
}

PreranaError.prototype = Object.create(Error.prototype);
PreranaError.prototype.constructor = PreranaError;

module.exports = {
    internalServer: function(formatForWire) {
        const error = new PreranaError(
            'Internal server error',
            responseCodes.InternalServer,
            'InternalServerError'
        );
        return formatForWire ? this.formatErrorForWire(error) : error;
    },
    formatErrorForWire: function(PreranaError) {
        return _.omit(PreranaError, 'stack');
    },
  resourceNotFound: function(formatForWire) {
    const error = new PreranaError('Resource Not Found', responseCodes.ResourceNotFound, 'ResourceNotFound');
    return formatForWire ? this.formatErrorForWire(error) : error;
  },
};
