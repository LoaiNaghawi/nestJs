import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn({ name: 'PROJECT_ID' })
  id: number;

  @Column({ name: 'PROJECT_NAME' })
  projectName: string;

  @Column({ name: 'START_DATE' })
  startDate: Date;

  @Column({ name: 'END_DATE' })
  endDate: string;

  @Column({ name: 'BUDGET' })
  budget: number;

  @Column({ name: 'STATUS' })
  status: string;

  @Column({ name: 'DEPARTMENT_ID' })
  dept: number;
}
