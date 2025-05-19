import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'create a new department' })
  @ApiResponse({ status: 201, description: 'department created successfully' })
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'get a list of departments' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get a single department by id' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  @ApiResponse({ status: 404, description: 'department was not found' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a department' })
  @ApiResponse({ status: 200, description: 'department updated successfully' })
  @ApiResponse({ status: 404, description: 'department was not found' })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete a department' })
  @ApiResponse({ status: 200, description: 'department deleted successfully' })
  @ApiResponse({ status: 404, description: 'department was not found' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.departmentService.remove(+id);
  }
}
