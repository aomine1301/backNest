"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var http_exeption_filter_1 = require("@src/fiters/http-exeption.filter");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.getUser = function (user) {
        return this.authService.createUser(user);
    };
    AuthController.prototype.getAllUsers = function () {
        return this.authService.getAllUsers({ limit: 10, offset: 1 });
    };
    __decorate([
        (0, common_1.UsePipes)(new common_1.ValidationPipe()),
        (0, common_1.Post)(),
        (0, common_1.UseFilters)(http_exeption_filter_1.MongoExceptionFilter),
        __param(0, (0, common_1.Body)())
    ], AuthController.prototype, "getUser");
    __decorate([
        (0, common_1.Get)()
    ], AuthController.prototype, "getAllUsers");
    AuthController = __decorate([
        (0, common_1.Controller)('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
