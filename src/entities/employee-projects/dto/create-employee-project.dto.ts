import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeProjectDto {
  @ApiProperty({
    description: 'project id',
    required: true,
    example: 1001,
  })
  @IsNotEmpty()
  projectId: number;

  @ApiProperty({
    description: 'employee id',
    required: true,
    example: 101,
  })
  @IsNotEmpty()
  employeeId: number;

  @ApiProperty({
    description: 'hours that the employee worked on this project',
    required: true,
    example: 1.5,
  })
  @IsNotEmpty()
  hoursWorked: number;

  @ApiProperty({
    description: "employee's role at this project",
    required: true,
    example: 'Developer',
  })
  @IsString()
  @IsNotEmpty()
  role: string;
}
