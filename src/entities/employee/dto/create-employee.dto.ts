import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateEmployeeDto {
  @ApiProperty({
    description: "Employee's first name",
    required: true,
    example: 'Sameer',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: "Employee's last name",
    required: true,
    example: 'Yansoon',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: "Employee's Email",
    required: true,
    example: 'Sameer.Yansoon@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Employee's phone number",
    required: true,
    example: '+9627765656565',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: "Employee's hiring date",
    required: true,
    example: '1/1/2020',
  })
  @IsString()
  @IsNotEmpty()
  hireDate: string;

  @ApiProperty({
    description: "Employee's salary",
    required: false,
    example: 1500,
  })
  @IsNotEmpty()
  salary: number;

  @ApiProperty({
    description: "Employee's job title",
    required: true,
    example: 'Office Boy',
  })
  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @ApiProperty({
    description: "Employee's manager id",
    required: false,
    example: 101,
  })
  mgrId: number;

  @ApiProperty({
    description: "Employee's department id",
    required: true,
    example: 10,
  })
  @IsNotEmpty()
  deptId: number;
}
