import {HttpCode, Injectable} from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    ) { }

    randomPassword() {
        const min = 100000
        const max = 1000000
        return Math.floor(Math.random() * (max - min + 1)) as Number
    }

    async createUser(email:string) {
        const salt = await genSaltSync(10);
        const newUser = new this.userModel({
            email: email,
            passwordHash: this.randomPassword(),
            // passwordHash: await hashSync(dto.password, salt)
        });
        return newUser.save();
    }

    async findUser(email:string) {
        return this.userModel.findOne({ email }).exec();
    }

    async get() {
        return this.userModel.find()
    }

    async delete() {
        return this.userModel.deleteMany()
    }

    async updateUser(email:string) {
        return this.userModel.updateOne({ email }, { $set: {
                passwordHash: this.randomPassword(),
            }
        });
    }

}
