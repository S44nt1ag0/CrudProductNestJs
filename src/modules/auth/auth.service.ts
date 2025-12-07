import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto, UserDto } from '../users/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    readonly userService: UsersService,
    readonly jwtService: JwtService,
  ) {}

  public async signUp(userDto: UserDto) {
    return await this.userService.createUser(userDto);
  }

  public async login(userDto: SignInDto) {
    const user = (await this.userService.findByEmail(userDto.email))?.toJSON();
    if (!user) {
      throw new UnauthorizedException();
    }

    const comparePassword = await bcrypt.compare(
      userDto.password,
      user?.password as string,
    );

    if (!comparePassword) {
      throw new UnauthorizedException();
    }

    const token = await this.jwtService.signAsync({ id: user.id });
    return { token };
  }
}
