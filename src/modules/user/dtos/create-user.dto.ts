import { IsString } from 'class-validator';
import { User } from '../user.entity';

export class CreateUserDto {
  @IsString()
  login: string;

  @IsString()
  password: string;

  toEntity(): User {
    const user = new User();
    user.login = this.login;
    user.password = this.password;
    return user;
  }
}
