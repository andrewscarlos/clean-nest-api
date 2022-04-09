import { UserSchemaDocument } from "../schemas/user.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../entities/user";

@Injectable()
export class UserMongoRepository {
  constructor(
    @InjectModel("User") private readonly userModel: Model<UserSchemaDocument>
  ) {}

  async getAll(): Promise<UserSchemaDocument[]> {
    return this.userModel.find().lean<UserSchemaDocument[]>();
  }

  async getById(id: string) {
    return this.userModel.findById(id).lean<UserSchemaDocument>();
  }

  async create(user: User): Promise<UserSchemaDocument> {
    return this.userModel.create({ ...user, _id: user.id });
  }

  async update(user: User): Promise<UserSchemaDocument> {
    return this.userModel
      .findByIdAndUpdate(user.id, user, { new: true })
      .lean<UserSchemaDocument>();
  }

  async delete(id: string) {
    return this.userModel.deleteOne({ _id: id }).lean<UserSchemaDocument>();
  }
}
