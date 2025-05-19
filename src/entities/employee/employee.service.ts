import {
  HttpCode,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { EmailService } from '../../email/email.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly emailService: EmailService,
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    let emp = new Employee();
    emp.firstName = createEmployeeDto.firstName;
    emp.lastName = createEmployeeDto.lastName;
    emp.salary = createEmployeeDto.salary;
    emp.hireDate = createEmployeeDto.hireDate;
    emp.job = createEmployeeDto.jobTitle;
    emp.mgr = createEmployeeDto.mgrId;
    emp.deptId = createEmployeeDto.deptId;
    emp.email = createEmployeeDto.email;
    emp.phone = createEmployeeDto.phone;
    this.employeesRepository.save(emp);
    await this.emailService.sendMail(
      'talha.alshafeey@realsoft-me.com',
      'New Employee (Loai nestJs)',
      `New employee added, name is: ${emp.firstName} ${emp.lastName}`,
    );
    return emp;
  }

  async findAll(): Promise<Employee[]> {
    return this.employeesRepository.find({ relations: ['dept'] });
  }

  findOne(id: number) {
    return this.employeesRepository.findOneBy({ id });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    let emp = await this.employeesRepository.findOneBy({ id });
    if (!emp) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    emp.firstName = updateEmployeeDto.firstName;
    emp.lastName = updateEmployeeDto.lastName;
    emp.salary = updateEmployeeDto.salary;
    emp.hireDate = updateEmployeeDto.hireDate;
    emp.job = updateEmployeeDto.jobTitle;
    emp.mgr = updateEmployeeDto.mgrId;
    emp.deptId = updateEmployeeDto.deptId;
    emp.email = updateEmployeeDto.email;
    emp.phone = updateEmployeeDto.phone;
    this.employeesRepository.save(emp);
    return emp;
  }

  remove(id: number) {
    return this.employeesRepository.delete({ id });
  }
}
