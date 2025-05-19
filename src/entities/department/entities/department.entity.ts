import { Employee } from 'src/entities/employee/entities/employee.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryGeneratedColumn({ name: 'DEPARTMENT_ID' })
  id: number;

  @Column({ name: 'DEPARTMENT_NAME' })
  departmentName: string;

  @Column({ name: 'LOCATION' })
  location: string;

  @Column({ name: 'BUDGET' })
  budget: number;

  @Column({ name: 'MANAGER_ID' })
  mgr: number;

  @Column({ name: 'CREATED_DATE' })
  createdDate: string;

  @OneToMany(() => Employee, (emp) => emp.dept)
  employees: Employee[];
}
