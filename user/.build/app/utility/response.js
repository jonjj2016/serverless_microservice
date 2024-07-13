"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
const formatResponse = (statusCode, message, data) => {
    if (data) {
        return {
            statusCode,
            headers: { 'Access-Control-Allow-Origin': '.' },
            body: JSON.stringify({
                message,
                data,
            }),
        };
    }
    else {
        return {
            statusCode,
            headers: { 'Access-Control-Allow-Origin': '.' },
            body: JSON.stringify({
                message,
            }),
        };
    }
};
const SuccessResponse = (data) => formatResponse(200, 'Success', data);
exports.SuccessResponse = SuccessResponse;
const ErrorResponse = (code = 1000, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || 'Error Occured';
        return formatResponse(code, errorMessage, null);
    }
    return formatResponse(code, `${error}`, null);
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=response.js.map