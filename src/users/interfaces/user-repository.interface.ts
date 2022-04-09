import { User } from "../entities/user";

export interface UserRepositoryInterface {
  getAll(): Promise<User[]>;

  getById(id: string): Promise<User>;

  create(user: User): Promise<User>;

  update(user: User): Promise<User>;

  delete(id: string);
}
