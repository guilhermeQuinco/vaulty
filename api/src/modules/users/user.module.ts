import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UsersController } from './users.controller';
import { BcryptHashingService } from '../shared/hashing/bcrypt-hashing.service';
import { UserRepository } from 'src/infra/implementations/repositories/user.repository';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user.entity';
import { HashingModule } from '../shared/hashing/bcrypt-hashing.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HashingModule],
  controllers: [UsersController],
  providers: [UserRepository, CreateUserUseCase],
})
export class UsersModule {}
