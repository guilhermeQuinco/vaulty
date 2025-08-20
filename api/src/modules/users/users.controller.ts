import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() input: CreateUserDto) {
    const response = await this.createUserUseCase.execute(input);

    return response;
  }
}
