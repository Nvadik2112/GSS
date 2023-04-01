import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GuideModel } from './guide.model';

@Controller('guide')
export class GuideController {
  @Post('create')
  async create(@Body() dto: GuideModel) {}

  @Get()
  async get() {}

  @Delete()
  async delete() {}

  @Patch()
  async patch(@Body() dto: GuideModel) {}

  @Post('createGuideContent')
  async setGuideContent(@Body() dto: Omit<GuideModel['guideContent'], '_id'>) {}

  @Get('guideContent/:id')
  async getGuideContent(@Param('id') id: string) {}

  @Post('createCarousel')
  async setCarousel(@Body() dto: Omit<GuideModel['carousel'], '_id'>) {}

  @Get('carousel/:id')
  async getCarousel(@Param('id') id: string) {}

  @Post('createProducts')
  async setProducts(@Body() dto: Omit<GuideModel['products'], '_id'>) {}

  @Get('products/:id')
  async getProducts(@Param('id') id: string) {}
}
