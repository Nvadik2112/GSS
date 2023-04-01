import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpException, HttpStatus,
  Param,
  Patch,
  Post, Put,
} from '@nestjs/common';
import { ContactsModel } from './contacts.model';
import { CreateContactsDto } from './dto/create-contacts';
import { ContactsService } from './contacts.service';
import {SOCIAL_NOT_FOUND} from './contacts.constants';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() dto: CreateContactsDto) {
    return this.contactsService.create(dto);
  }

  @Patch()
  async update(@Body() dto: CreateContactsDto) {
    return this.contactsService.update(dto);
  }

  @Get()
  async find() {
    return this.contactsService.find();
  }

  @Delete()
  async delete() {
    return this.contactsService.delete();
  }
}
