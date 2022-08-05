import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export interface UserInterface {
  username: string;
  password: string;
  email: string;
}

export class UserDto implements UserInterface {
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  readonly username;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  readonly password;

  @IsString()
  @IsEmail()
  readonly email: string;
}
