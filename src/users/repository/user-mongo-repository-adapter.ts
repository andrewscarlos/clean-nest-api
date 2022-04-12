import { Inject, Injectable } from "@nestjs/common";
import { User } from "../entities/user";
import { UserRepositoryInterface } from "../interfaces/user-repository.interface";
import { UserMongoRepository } from "./user-mongo-repository";

@Injectable()
export class UserMongoRepositoryAdapter implements UserRepositoryInterface {
  constructor(
    @Inject(UserMongoRepository)
    private readonly userMongoRepository: UserMongoRepository
  ) {}

  async getAll(): Promise<User[]> {
    const mongoseUsers = await this.userMongoRepository.getAll();
    const users = mongoseUsers.map((mongoseUser) => {
      const user = new User();
      return Object.assign(user, mongoseUser);
    });
    return users;
  }

  async getById(id: string): Promise<User> {
    return await this.userMongoRepository.getById(id);
  }

  async create(user: User): Promise<User> {
    return await this.userMongoRepository.create(user);
  }

  async update(user: User): Promise<User> {
    return await this.userMongoRepository.update(user);
  }

  async delete(id: string) {
    return await this.userMongoRepository.delete(id);
  }
}
