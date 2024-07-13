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
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
    Signin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
    Verify(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
    Profile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
    Cart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
    Payment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, utility_1.SuccessResponse)({});
            }
            catch (error) {
                return (0, utility_1.ErrorResponse)(1000, error);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map