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
exports.UserService = void 0;
const utility_1 = require("../utility");
class UserService {
    constructor() { }
    Signup(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ message: 'user created', data: {} });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    Signin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user signed in' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    Verify(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user verified' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    // User Profile Methods
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user profile get' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    UpdateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user profile Patched' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user profile created' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    // Cart Crud Operation Methods
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user cart Create' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user cart Get' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    UpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user cart Update' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    // Payment Crud Operation Methods
    CreatePayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user payment Create' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    UpdatePayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user payment Update' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
    GetPayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({ data: {}, message: 'user payment Get' });
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(500, error);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map