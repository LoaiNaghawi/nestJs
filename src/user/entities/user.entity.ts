import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ name: 'USERNAME' })
  userName: number;

  @Column({ name: 'FIRST_NAME' })
  firstName: string;

  @Column({ name: 'LAST_NAME' })
  lastName: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'PHONE' })
  phone: string;

  @Column({ name: 'PASSWORD' })
  password: string;

  @Column({ name: 'IS_BLOCKED' })
  isBlocked: boolean;

  @Column({ name: 'LAST_LOGIN' })
  lastLogin: Date;
}
