import { Module } from '@nestjs/common';
import { SocialsController } from './socials.controller';
import { SocialsService } from './socials.service';
import { TypegooseModule } from 'nestjs-typegoose';
import {  SocialsModel  } from './socials.model';

@Module({
  controllers: [SocialsController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: SocialsModel,
        schemaOptions: {
          collection: 'Socials',
        }
      }
    ])
  ],
  providers: [SocialsService]
})
export class SocialsModule {}
