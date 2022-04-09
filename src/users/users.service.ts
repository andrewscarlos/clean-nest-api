import { Injectable } from "@nestjs/common";
import { User } from "./entities/user";
import { UserRepositoryInterface } from "./interfaces/user-repository.interface";
import { UserServiceInterface } from "./interfaces/user-service.interface";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDto } from "./dtos/create-user.dto";
@Injectable()
export class UsersService implements UserServiceInterface {
  constructor(protected readonly userRepository: UserRepositoryInterface) {}

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
      newUser.id = uuidv4();
      Object.assign(newUser, user);
      await this.userRepository.create(newUser);
      return newUser;
    } catch (err) {
      return err;
    }
  }

  async update(): Promise<User> {}

  async delete(id: string) {}
}
