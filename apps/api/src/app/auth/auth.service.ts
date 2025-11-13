import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AuthLoginResponse, AuthRegisterResponse } from 'libs/src/auth/auth.types';
import { User } from 'libs/src/data/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(username: string, email: string, password: string): Promise<AuthRegisterResponse> {
    const userExists = await this.userRepository.findOneBy({ email });
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      username,
      email,
      passwordHash: hashedPassword,
    });

    await this.userRepository.save(newUser);
    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string): Promise<AuthLoginResponse> {
  const user = await this.userRepository.findOneBy({ email });
  if (!user) {
    throw new BadRequestException('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new BadRequestException('Invalid credentials');
  }

  const token = this.jwtService.sign({ id: user.id, email: user.email });

  return { message: 'Login successful', token };
}
}