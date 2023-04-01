import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ContactsModel} from '../contacts.model';
import {DocumentType, ModelType} from '@typegoose/typegoose/lib/types';
import {SocialsModel} from './socials.model';

import {DATA_IS_EXIST} from '../contacts.constants';
import {CreateSocialsDto} from './dto/create-socials';

@Injectable()
export class SocialsService {
	constructor(@InjectModel(SocialsModel)
				private readonly socialsModel: ModelType<SocialsModel>) {}

	async create(dto: CreateSocialsDto): Promise<DocumentType<SocialsModel>> {
		return this.socialsModel.create(dto);
	}

	async deleteById(socialId: string)  {
		return this.socialsModel.findByIdAndDelete(socialId).exec();
	}
}
