"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = exports.cart = exports.profile = exports.verify = exports.signin = exports.signup = void 0;
const userService_1 = require("../service/userService");
const utility_1 = require("../utility");
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const service = new userService_1.UserService();
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
})(HttpMethod || (HttpMethod = {}));
exports.signup = (0, core_1.default)((event) => {
    return service.Signup(event);
}).use((0, http_json_body_parser_1.default)());
exports.signin = (0, core_1.default)((event) => {
    return service.Signin(event);
}).use((0, http_json_body_parser_1.default)());
exports.verify = (0, core_1.default)((event) => {
    return service.Verify(event);
}).use((0, http_json_body_parser_1.default)());
exports.profile = (0, core_1.default)((event) => {
    var _a, _b;
    const httpMethod = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.method;
    switch (httpMethod) {
        case 'GET':
            console.log('Here');
            return service.GetProfile(event);
        case 'PUT':
            return service.UpdateProfile(event);
        case 'POST':
            return service.CreateProfile(event);
        default:
            return (0, utility_1.ErrorResponse)(404, 'Invalid Method!!!');
    }
}).use((0, http_json_body_parser_1.default)());
exports.cart = (0, core_1.default)((event) => {
    var _a, _b;
    const httpMethod = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.method;
    switch (httpMethod) {
        case 'GET':
            return service.GetCart(event);
        case 'PUT':
            return service.UpdateCart(event);
        case 'POST':
            return service.CreateCart(event);
        default:
            return (0, utility_1.ErrorResponse)(404, 'Invalid Method!!!');
    }
}).use((0, http_json_body_parser_1.default)());
exports.payment = (0, core_1.default)((event) => {
    var _a, _b;
    const httpMethod = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.method;
    switch (httpMethod) {
        case 'GET':
            return service.GetPayment(event);
        case 'PUT':
            return service.UpdatePayment(event);
        case 'POST':
            return service.CreatePayment(event);
        default:
            return (0, utility_1.ErrorResponse)(404, 'Invalid Method!!!');
    }
}).use((0, http_json_body_parser_1.default)());
//# sourceMappingURL=user.handler.js.map