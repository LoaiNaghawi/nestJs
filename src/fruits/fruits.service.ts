import {
  BadRequestException,
  ImATeapotException,
  Injectable,
} from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FruitsService {
  constructor(private configService: ConfigService) {}
  create(createFruitDto: CreateFruitDto) {
    return 'This action adds a new fruit';
  }

  findAll() {
    return `This action returns all fruits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fruit`;
  }

  update(id: number, updateFruitDto: UpdateFruitDto) {
    return `This action updates a #${id} fruit`;
  }

  remove(id: number) {
    return `This action removes a #${id} fruit`;
  }

  async getBananaFruit(id: string): Promise<any> {
    try {
      const response = await axios.get(
        `https://www.fruityvice.com/api/fruit/${id}`,
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getPost(id: number): Promise<any> {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getFood(): Promise<any> {
    try {
      const key = '&app_key=' + this.configService.get<string>('FOOD_KEY');
      const id = '&app_id=' + this.configService.get<string>('FOOD_ID');
      const url = this.configService.get<string>('FOOD_URL');
      console.log(url, id, key);
      const response = await axios.get(`${url}${key}${id}`, {
        headers: {
          accept: 'application/json',
          'Edamam-Account-User': this.configService.get<string>('FOOD_USER'),
          'Accept-Language': 'en',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
