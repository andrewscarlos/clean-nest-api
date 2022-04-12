import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserMongoRepository } from "./repository/user-mongo-repository";
import { UserMongoRepositoryAdapter } from "./repository/user-mongo-repository-adapter";
import { UserSchema } from "./schemas/user.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "User",
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserMongoRepository,
    {
      provide: "UserServiceInterface",
      useClass: UsersService,
    },
    {
      provide: "UserRepositoryInterface",
      useClass: UserMongoRepositoryAdapter,
    },
  ],
  
})
export class UsersModule {}
