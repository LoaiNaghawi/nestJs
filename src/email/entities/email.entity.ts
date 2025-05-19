import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'emails' })
export class Email {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'FROM_EMAIL' })
  senderEmail: string;

  @Column({ name: 'TO_EMAIL' })
  recieverEmail: string;

  @Column({ name: 'SUBJECT' })
  emailSubject: string;

  @Column({ name: 'EMAIL_BODY' })
  emailBody: string;
}
