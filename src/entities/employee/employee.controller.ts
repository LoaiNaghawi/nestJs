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
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new employee' })
  @ApiResponse({ status: 201, description: 'employee added succesfully' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({ summary: 'get a list of all employees' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get a single employee by id' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: `update an employee's data` })
  @ApiResponse({ status: 200, description: 'updated succesfully' })
  @ApiResponse({ status: 404, description: 'employee was not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: `delete an employee` })
  @ApiResponse({ status: 200, description: 'deleted succesfully' })
  @ApiResponse({ status: 404, description: 'employee was not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
}
