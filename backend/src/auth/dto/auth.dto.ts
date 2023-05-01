import { IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  login: string
}

export class AuthDto {
  @IsString()
  login: string;

  @IsString()
  password: number;
}


