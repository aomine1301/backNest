import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

interface LoginUserInterface {
  username: string;
  password: string;
}

export class LoginUserDto implements LoginUserInterface {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  username: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
