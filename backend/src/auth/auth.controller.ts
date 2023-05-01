import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode, HttpException, HttpStatus,
  Post, Res,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {AuthDto, RegisterDto} from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { ALREADY_REGISTERED_ERROR } from "./auth.constants";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const oldUser = await this.authService.findUser(dto.login);

    if (oldUser) {
      res.status(HttpStatus.OK)
      return await this.authService.updateUser(dto.login);
    }
    return this.authService.createUser(dto.login);
  }

  @Get()
  async get() {
    return this.authService.get()
  }

  @Delete()
  async delete() {
    return this.authService.delete()
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
