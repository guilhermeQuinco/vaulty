import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/implementations/repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { BcryptHashingService } from 'src/modules/shared/hashing/bcrypt-hashing.service';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashedService: BcryptHashingService,
  ) {}

  async execute(input: CreateUserDto) {
    const isUserExists = await this.userRepository.findUserByEmail(input.email);

    if (isUserExists) {
      throw new BadRequestException('E-mail já está cadastrado');
    }

    const hashedPassword = await this.hashedService.hash(input.password);

    const user = await this.userRepository.createUser({
      ...input,
      password: hashedPassword,
    });

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
  }
}
