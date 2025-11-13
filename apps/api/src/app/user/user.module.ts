import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'libs/src/data/organization.entity';
import { User } from 'libs/src/data/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Organization])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
