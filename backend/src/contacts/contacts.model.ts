import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ContactsModel extends Base { }
export class ContactsModel extends TimeStamps {
  @prop()
  email: string;

  @prop()
  policyUrl: string;

  @prop()
  treatyUrl: string;
}
