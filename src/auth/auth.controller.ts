import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '@src/auth/auth.service';
import { UserDto } from '@src/auth/dto/user.dto';
import { MongoExceptionFilter } from '@src/fiters/http-exeption.filter';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  @UseFilters(MongoExceptionFilter)
  getUser(@Body() user: UserDto) {
    return this.authService.createUser(user);
  }

  @Get()
  getAllUsers() {
    return this.authService.getAllUsers({ limit: 10, offset: 1 });
  }
  @Post('/login')
  login(@Body() user: UserDto) {
    return this.authService.login(user);
  }
}
