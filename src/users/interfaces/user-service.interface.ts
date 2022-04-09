import { User } from "../entities/user";

export interface UserServiceInterface {
  getAll(): Promise<User[]>;

  getById(id: string): Promise<User>;

  create(): Promise<User>;

  update(): Promise<User>;

  delete(id: string);
}
