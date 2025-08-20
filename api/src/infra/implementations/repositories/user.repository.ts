import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly _repository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this._repository.create(user);

    return await this._repository.save(newUser);
  }

  async findUserByEmail(email: string) {
    return await this._repository.findOne({ where: { email } });
  }

  async findUserByUsername() {}
}
