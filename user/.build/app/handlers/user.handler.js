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
    return yield service.Profile(event);
});
exports.profile = profile;
const cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.Cart(event);
});
exports.cart = cart;
const payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return yield service.Payment(event);
});
exports.payment = payment;
//# sourceMappingURL=user.handler.js.map