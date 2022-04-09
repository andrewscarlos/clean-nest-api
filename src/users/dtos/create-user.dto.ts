export class CreateUserDto {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  cpf?: string;
  phone?: string;
}
