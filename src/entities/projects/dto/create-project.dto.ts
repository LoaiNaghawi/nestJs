import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { Timestamp } from 'typeorm';

export class CreateProjectDto {
  @ApiProperty({
    description: 'project name',
    required: true,
    example: 'DVLD',
  })
  @IsString()
  @IsNotEmpty()
  projectName: string;

  @ApiProperty({
    description: 'project start date',
    required: true,
    example: '1/1/2020',
  })
  @IsString()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({
    description: 'project end date',
    required: false,
    example: '1/1/2025',
  })
  @IsString()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty({
    description: 'project budget',
    required: true,
    example: 150000000,
  })
  @IsNotEmpty()
  budget: number;

  @ApiProperty({
    description: 'project status',
    required: true,
    example: 'ongoing',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    description: 'department id',
    required: true,
    example: 10,
  })
  @IsNotEmpty()
  deptId: number;
}
