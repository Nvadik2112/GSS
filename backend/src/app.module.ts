import { Module } from '@nestjs/common';
import { GuideModule } from './guide/guide.module';
import { MainModule } from './main/main.module';
import { ContactsModule } from './contacts/contacts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';


@Module({
  imports: [
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    ConfigModule.forRoot(),
    GuideModule,
    MainModule,
    ContactsModule,
    AuthModule,
  ],
})
export class AppModule {}
