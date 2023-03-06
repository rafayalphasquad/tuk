import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUser(email, password);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    } else return null;
  }
  login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  register(user: CreateUserDto) {
    const newUser = this.usersService.create(user);
    return this.login(newUser);
  }

  async validateSocialLogin(
    userName: string,
    email: string,
    profilePicture: string,
  ) {
    const user = await this.usersService.findByEmail(email);

    if (user && user.email === email) {
      const access_token = this.jwtService.sign(user);
      return access_token;
    } else {
      return this.register(user);
    }
  }
}
