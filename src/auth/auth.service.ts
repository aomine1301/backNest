import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '@src/auth/schemas/user.schema';
import { Model } from 'mongoose';
import { UserDto, UserInterface } from '@src/auth/dto/user.dto';
import { PaginationQueryDto } from '@src/auth/dto/pagination.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '@auth/dto/login-user.dto';
import { NotFoundTaskException } from '@src/exeptions/not-found-exception.exception';
import { ForgetPasswordService } from '@auth/custom-servise/password-servise';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
    private forgetPasswordService: ForgetPasswordService,
  ) {}

  public async createUser(user: UserDto): Promise<UserInterface> {
    const hashPassword = await bcrypt.hash(user.password, saltOrRounds);
    const userWithHashPassword = { ...user, password: hashPassword };
    const newUser = await new this.userModel(userWithHashPassword);
    await newUser.save();
    return user;
  }
  public async getAllUsers(
    paginationQuery: PaginationQueryDto,
  ): Promise<UserInterface[]> {
    const { limit, offset } = paginationQuery;
    this.forgetPasswordService.forgetPassword('Hello', 'ssss');
    return this.userModel
      .find({}, { password: false })
      .skip(offset)
      .limit(limit);
  }
  //qwerty123456
  async login(user: LoginUserDto) {
    const comparePassword = (password: string): boolean => {
      const salt = bcrypt.genSaltSync(saltOrRounds);
      const hash = bcrypt.hashSync(password, salt);
      return bcrypt.compareSync(password, hash);
    };
    console.log(user)
    const findUser = await this.userModel.find({
      $and: [{ username: user.username }],
    });

    if (findUser.length > 0 && comparePassword(user.password)) {
      const payload = { uid: findUser[0].id };
      return {
        token: this.jwtService.sign(payload),
      };
    } else {
      return new NotFoundTaskException({
        description: 'Пользователь с таким именем не найден',
      });
    }
  }
}
