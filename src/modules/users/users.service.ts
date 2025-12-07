import { USER_REPOSITORY } from 'src/core/constants';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async createUser(userDto: UserDto) {
    const userAlreadyExists = await this.userRepository.findOne({
      where: { email: userDto.email },
    });

    if (userAlreadyExists) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = await bcrypt.hash(userDto.password, 10);

    const user = await this.userRepository.create({
      ...userDto,
      password: passwordHash,
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.destroy({ where: { id } });
  }
}
