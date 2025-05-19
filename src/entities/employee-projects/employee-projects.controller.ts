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
import { EmployeeProjectsService } from './employee-projects.service';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';
import { UpdateEmployeeProjectDto } from './dto/update-employee-project.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('employee-projects')
export class EmployeeProjectsController {
  constructor(
    private readonly employeeProjectsService: EmployeeProjectsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'create a new employee-project connection' })
  @ApiResponse({ status: 201, description: 'connection created successfully' })
  create(@Body() createEmployeeProjectDto: CreateEmployeeProjectDto) {
    return this.employeeProjectsService.create(createEmployeeProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'get a list of employee-project connections' })
  @ApiResponse({ status: 201, description: 'request was successful' })
  findAll() {
    return this.employeeProjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get a single employee-project connection by id' })
  @ApiResponse({ status: 201, description: 'request was successful' })
  @ApiResponse({
    status: 404,
    description: 'employee-project connection was not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeeProjectsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update an employee-project connection' })
  @ApiResponse({ status: 200, description: 'connection updated successfully' })
  @ApiResponse({
    status: 404,
    description: 'employee-project connection was not found',
  })
  update(
    @Param('id') id: string,
    @Body() updateEmployeeProjectDto: UpdateEmployeeProjectDto,
  ) {
    return this.employeeProjectsService.update(+id, updateEmployeeProjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete an employee-project connection' })
  @ApiResponse({ status: 200, description: 'connection deleted successfully' })
  @ApiResponse({
    status: 404,
    description: 'employee-project connection was not found',
  })
  remove(@Param('id') id: string) {
    return this.employeeProjectsService.remove(+id);
  }
}
