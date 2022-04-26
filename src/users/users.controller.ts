import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { User } from "./entities/user";
import { UserServiceInterface } from "./interfaces/user-service.interface";

@Controller("users")
export class UsersController {
  constructor(
    @Inject("UserServiceInterface")
    private readonly userService: UserServiceInterface
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get()
  async getById(id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Put()
  update(user: CreateUserDto): Promise<User> {
    return this.userService.update(user);
  }

  @Delete()
  delete(id: string) {
    return this.userService.delete(id);
  }
}
