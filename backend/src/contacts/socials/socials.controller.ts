import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {SocialsService} from './socials.service';
import {CreateSocialsDto} from './dto/create-socials';

@Controller('contacts/socials')
export class SocialsController {
	constructor(private readonly socialsService: SocialsService) {}

	@Post()
	async create(@Body() dto: CreateSocialsDto) {
		return this.socialsService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') socialId: string) {
		return this.socialsService.deleteById(socialId);
	}
}
