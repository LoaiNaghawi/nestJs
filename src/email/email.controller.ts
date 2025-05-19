import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
// import { UpdateEmailDto } from './dto/update-email.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  // @Post()
  // @ApiOperation({ summary: 'create a new email log' })
  // @ApiResponse({ status: 201, description: 'email log created successfully' })
  // create(@Body() createEmailDto: CreateEmailDto) {
  //   return this.emailService.create(createEmailDto);
  // }

  // @Get()
  // @ApiOperation({ summary: 'retrieve all email logs' })
  // @ApiResponse({ status: 200, description: 'request was successful' })
  // findAll() {
  //   return this.emailService.findAll();
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'retrieve an email log by id' })
  // @ApiResponse({ status: 200, description: 'request was successful' })
  // @ApiResponse({ status: 404, description: 'email log was not found' })
  // findOne(@Param('id') id: string) {
  //   return this.emailService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmailDto: UpdateEmailDto) {
  //   return this.emailService.update(+id, updateEmailDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'delete an email log' })
  // @ApiResponse({ status: 200, description: 'email log deleted' })
  // @ApiResponse({ status: 404, description: 'email log was not found' })
  // remove(@Param('id') id: string) {
  //   return this.emailService.remove(+id);
  // }
}
