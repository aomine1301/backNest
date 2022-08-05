"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_controller_1 = require("@src/auth/auth.controller");
var auth_service_1 = require("@src/auth/auth.service");
var mongoose_1 = require("@nestjs/mongoose");
var user_schema_1 = require("@src/auth/schemas/user.schema");
var jwt_1 = require("@nestjs/jwt");
var secretKetJWT_1 = require("@src/constants/secretKetJWT");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                    jwt_1.JwtModule.register({
                        secret: secretKetJWT_1.jwtConstants.secret,
                        signOptions: { expiresIn: '60s' }
                    }),
                ]),
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;