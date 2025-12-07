import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';

export class UserDto {
  @IsOptional()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  createdAt: Date;
  updatedAt: Date;
}

export class SignInDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
