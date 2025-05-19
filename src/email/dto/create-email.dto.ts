import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateEmailDto {
  @ApiProperty({
    description: "sender's email",
    required: true,
    example: 'sameer.yansoon@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  emailFrom: string;

  @ApiProperty({
    description: "reciever's email",
    required: true,
    example: 'sameer.yansoon@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  emailTo: string;

  @ApiProperty({
    description: 'email subject',
    required: true,
    example: 'welcoming new employee',
  })
  @IsString()
  @IsNotEmpty()
  emailSubject: string;

  @ApiProperty({
    description: 'email body',
    required: true,
    example: 'greeting, we are sending you this email to......',
  })
  @IsString()
  @IsNotEmpty()
  emailBody: string;
}
