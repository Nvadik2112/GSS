import { Module } from '@nestjs/common';
import { GuideController } from './guide.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { GuideModel } from './guide.model';

@Module({
  controllers: [GuideController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GuideModel,
        schemaOptions: {
          collection: 'Guide',
        },
      },
    ]),
  ],
})
export class GuideModule {}
