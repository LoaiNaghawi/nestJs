import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'yansoonsameer1@gmail.com',
        pass: this.configService.get<string>('SMTP_PASSWORD'),
      },
    });
  }
  private transporter: nodemailer.Transporter;
  // async onModuleInit() {
  //   const testAccount = await nodemailer.createTestAccount();
  //   this.transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     auth: {
  //       user: testAccount.user,
  //       pass: testAccount.pass,
  //     },
  //   });
  // }

  // create(createEmailDto: CreateEmailDto) {
  //   let email = new Email();
  //   email.emailBody = createEmailDto.emailBody;
  //   email.emailSubject = createEmailDto.emailSubject;
  //   email.recieverEmail = createEmailDto.emailTo;
  //   email.senderEmail = createEmailDto.emailFrom;
  //   this.emailRepository.save(email);
  //   return email;
  // }

  async sendMail(to: string, subject: string, text: string) {
    let mail = new Email();
    mail.emailBody = text;
    mail.emailSubject = subject;
    mail.recieverEmail = to;
    mail.senderEmail = 'yansoonsameer1@gmail.com';
    this.emailRepository.save(mail);
    const info = await this.transporter.sendMail({
      from: '"SameerYansoon" <yansoonsameer1@gmail.com>',
      to,
      subject,
      text,
    });
    console.log(nodemailer.getTestMessageUrl(info));
    return nodemailer.getTestMessageUrl(info);
  }

  // findAll() {
  //   return this.emailRepository.find();
  // }

  // findOne(id: number) {
  //   return this.emailRepository.findOneBy({ id });
  // }

  // update(id: number, updateEmailDto: UpdateEmailDto) {
  //   return `This action updates a #${id} email`;
  // }

  // remove(id: number) {
  //   return this.emailRepository.delete({ id });
  // }
}
