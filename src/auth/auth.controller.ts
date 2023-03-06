import {
  Body,
  Get,
  Post,
  Controller,
  Request,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('social')
  async validateSocialLogin(
    @Body('email') email: string,
    @Body('userName') userName: string,
    @Body('profilePicture') profilePicture: string,
  ) {
    return this.authService.validateSocialLogin(
      userName,
      email,
      profilePicture,
    );
  }
}
