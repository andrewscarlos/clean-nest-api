import { Controller, Get } from "@nestjs/common";
import { UserServiceInterface } from "./interfaces/user-service.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserServiceInterface);

  @Get()
  async getAll() {
    return this.userService.getAll();
  }
}
