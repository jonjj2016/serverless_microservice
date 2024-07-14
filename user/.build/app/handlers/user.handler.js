"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = exports.cart = exports.profile = exports.verify = exports.signin = exports.signup = void 0;
const userService_1 = require("../service/userService");
const utility_1 = require("../utility");
const service = new userService_1.UserService();
const signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.Signup(event);
});
exports.signup = signup;
const signin = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.Signin(event);
});
exports.signin = signin;
const verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.Verify(event);
});
exports.verify = verify;
const profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const httpMethod = (_b = (_a = event.requestContext) === null || _a === void 0 ? void 0 : _a.http) === null || _b === void 0 ? void 0 : _b.method;
    switch (httpMethod) {
        case 'GET':
            console.log('Here');
            return yield service.GetProfile(event);
        case 'PUT':
            return yield service.UpdateProfile(event);
        case 'POST':
            return yield service.CreateProfile(event);
        default:
            return (0, utility_1.ErrorResponse)(404, 'Invalid Method!!!');
    }
});
exports.profile = profile;
const cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.CreateCart(event);
});
exports.cart = cart;
const payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.CreatePayment(event);
});
exports.payment = payment;
//# sourceMappingURL=user.handler.js.map