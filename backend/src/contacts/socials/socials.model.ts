import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import {prop} from '@typegoose/typegoose';
import {Types} from 'mongoose';

export interface SocialsModel extends Base { }
export class SocialsModel extends TimeStamps {
	@prop()
	link: string;

	@prop()
	logo: string;

	@prop()
	socialId: Types.ObjectId;
}