import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth.local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';


@Module({
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  imports:[UsersModule,PassportModule, JwtModule.register({
    secret: "secretkey",
    signOptions: { expiresIn: '60h' },
  }),]
})
export class AuthModule {}
