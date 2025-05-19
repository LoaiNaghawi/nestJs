import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { request } from 'http';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Get('food')
  getRecipe() {
    return this.fruitsService.getFood();
  }

  @Get('post/:id')
  getPost(@Param('id', ParseIntPipe) id: number) {
    return this.fruitsService.getPost(id);
  }

  @Get(':id')
  getBanana(@Param('id', ParseIntPipe) id: string) {
    return this.fruitsService.getBananaFruit(id);
  }

  @Post()
  create(@Body() createFruitDto: CreateFruitDto) {
    return this.fruitsService.create(createFruitDto);
  }

  @Get()
  findAll() {
    return this.fruitsService.getBananaFruit('all');
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.fruitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateFruitDto: UpdateFruitDto,
  ) {
    return this.fruitsService.update(+id, updateFruitDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.fruitsService.remove(+id);
  }
}
