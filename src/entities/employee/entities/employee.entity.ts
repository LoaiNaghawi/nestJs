import { Department } from 'src/entities/department/entities/department.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn({ name: 'EMPLOYEE_ID' })
  id: number;

  @Column({ name: 'FIRST_NAME' })
  firstName: string;

  @Column({ name: 'LAST_NAME' })
  lastName: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'PHONE' })
  phone: string;

  @Column({ name: 'HIRE_DATE' })
  hireDate: string;

  @Column({ name: 'JOB_TITLE' })
  job: string;

  @Column({ name: 'SALARY' })
  salary: number;

  @Column({ name: 'DEPARTMENT_ID' })
  deptId: number;

  @Column({ name: 'MANAGER_ID' })
  mgr: number;

  @ManyToOne(() => Department, (dept) => dept.employees)
  @JoinColumn({ name: 'DEPARTMENT_ID' })
  dept: Department;
}
