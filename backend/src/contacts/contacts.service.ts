import {Get, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ContactsModel} from './contacts.model';
import {ModelType, DocumentType} from '@typegoose/typegoose/lib/types';
import {CreateContactsDto} from './dto/create-contacts';
import {Types} from 'mongoose';
import {DATA_IS_EXIST} from './contacts.constants';


@Injectable()
export class ContactsService {
	constructor(@InjectModel(ContactsModel)
				private readonly contactsModel: ModelType<ContactsModel>) {}

	async create(dto: CreateContactsDto): Promise<DocumentType<ContactsModel>> {
		const finder = await this.contactsModel.find();
		if (finder.length === 0) {
			return this.contactsModel.create(dto);
		} else
		{ throw new HttpException( DATA_IS_EXIST, HttpStatus.OK); }
	}

	async update(dto: CreateContactsDto): Promise<DocumentType<ContactsModel>> {
		return this.contactsModel.findOneAndUpdate( { }, dto, {new: true} ).exec();
	}

	async find(): Promise<DocumentType<ContactsModel>> {
		return this.contactsModel.findOne();
	}

	async delete()  {
		return this.contactsModel.deleteOne();
	}
}
