import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../entities/user";

export interface UserServiceInterface {
  getAll(): Promise<User[]>;

  getById(id: string): Promise<User>;

  create(user: CreateUserDto): Promise<User>;

  update(user: CreateUserDto): Promise<User>;

  delete(id: string);
}
