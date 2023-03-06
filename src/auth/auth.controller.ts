import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards,Request} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @Post('register')
  async register (@Body()CreateUserDto:CreateUserDto){
     return this.authService.register(CreateUserDto)
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
