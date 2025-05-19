import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentDto } from './create-department.dto';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @ApiProperty({
    description: "Department's name",
    required: true,
    example: 'Web Dev',
  })
  @IsString()
  @IsNotEmpty()
  departmentName: string;

  @ApiProperty({
    description: "Department's budget",
    required: true,
    example: 100,
  })
  @IsNotEmpty()
  budget: number;

  @ApiProperty({
    description: "Department's location",
    required: true,
    example: 'Web third floor',
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    description: "Department's manager id",
    required: true,
    example: 101,
  })
  @IsNotEmpty()
  mgrId: number;

  @ApiProperty({
    description: "Department's date of creation",
    required: false,
    example: '1/1/2020',
  })
  @IsString()
  @IsNotEmpty()
  createdDate: string;
}
