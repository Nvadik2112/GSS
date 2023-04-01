import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactsModel } from './contacts.model';
import { ContactsService } from './contacts.service';
import { SocialsModule } from './socials/socials.module';

@Module({
  controllers: [ContactsController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ContactsModel,
        schemaOptions: {
          collection: 'Contact',
        },
      },
    ]),
    SocialsModule,
  ],
  providers: [ContactsService],
})
export class ContactsModule {}
