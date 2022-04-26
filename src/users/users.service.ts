import { Inject, Injectable } from '@nestjs/common';
import { User } from "./entities/user";
import { UserServiceInterface } from "./interfaces/user-service.interface";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UserRepositoryInterface } from './interfaces/user-repository.interface';
import { generateOrderId } from './utils';

@Injectable()
export class UsersService implements UserServiceInterface {

  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async getAll(): Promise<User[]> {
    try {
      return this.userRepository.getAll();
    } catch (err) {
      return err;
    }
  }

  async getById(id: string): Promise<User> {
    try {
      return this.userRepository.getById(id);
    } catch (err) {
      return err;
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    try {
      const newUser = new User();
      newUser.id = generateOrderId()
      Object.assign(newUser, user);
      const response = await this.userRepository.create(newUser);
      return newUser;
    } catch (err) {
      return err;
    }
  }

  async update(user: CreateUserDto): Promise<User> {
    try {
      const newUser = new User();
      Object.assign(newUser, user);
      return this.userRepository.update(newUser);
    } catch (err) {
      return err;
    }
  }

  async delete(id: string) {
    try {
      return this.userRepository.delete(id);
    } catch (err) {
      return err;
    }
  }
}
