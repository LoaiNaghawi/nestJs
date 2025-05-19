import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'employee_projects' })
export class EmployeeProject {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'PROJECT_ID' })
  projectId: number;

  @Column({ name: 'EMPLOYEE_ID' })
  empId: number;

  @Column({ name: 'HOURS_WORKED' })
  hoursWorked: number;

  @Column({ name: 'ROLE' })
  role: string;
}
