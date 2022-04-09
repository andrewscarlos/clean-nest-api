import * as mongoose from "mongoose";
import { User } from "../entities/user";

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  birthDate: String,
  cpf: String,
  phone: String,
});

export type UserSchemaDocument = User & mongoose.Document;
