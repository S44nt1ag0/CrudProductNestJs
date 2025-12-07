import { Controller, Body, Post, Get, UseGuards, Req } from '@nestjs/common';
import { SignInDto, UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() body: SignInDto) {
    return await this.authService.login(body);
  }

  @Post('signup')
  async signUp(@Body() body: UserDto) {
    return await this.authService.signUp(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }
}
