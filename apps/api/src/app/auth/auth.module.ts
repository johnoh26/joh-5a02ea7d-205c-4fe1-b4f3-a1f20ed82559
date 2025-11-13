import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: process.env.JWT_SECRET || 'your-secret-key',
    signOptions: {
        expiresIn: '1h', // or '7d', '30m', '24h', etc.
      },
   })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
