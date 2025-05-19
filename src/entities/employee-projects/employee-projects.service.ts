import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeProjectDto } from './dto/create-employee-project.dto';
import { UpdateEmployeeProjectDto } from './dto/update-employee-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeProject } from './entities/employee-project.entity';

@Injectable()
export class EmployeeProjectsService {
  constructor(
    @InjectRepository(EmployeeProject)
    private employeeProjectRepository: Repository<EmployeeProject>,
  ) {}
  create(createEmployeeProjectDto: CreateEmployeeProjectDto) {
    try {
      let empProj = new EmployeeProject();
      empProj.empId = createEmployeeProjectDto.employeeId;
      empProj.hoursWorked = createEmployeeProjectDto.hoursWorked;
      empProj.projectId = createEmployeeProjectDto.projectId;
      empProj.role = createEmployeeProjectDto.role;
      this.employeeProjectRepository.save(empProj);
      return empProj;
    } catch (error) {
      console.log(error);
      return 'an error occured, please try again later';
    }
  }

  findAll() {
    return this.employeeProjectRepository.find();
  }

  findOne(id: number) {
    return this.employeeProjectRepository.findOneBy({ id });
  }

  async update(id: number, updateEmployeeProjectDto: UpdateEmployeeProjectDto) {
    let empProj = await this.employeeProjectRepository.findOneBy({ id });
    if (empProj != null) {
      empProj.empId = updateEmployeeProjectDto.employeeId;
      empProj.hoursWorked = updateEmployeeProjectDto.hoursWorked;
      empProj.projectId = updateEmployeeProjectDto.projectId;
      empProj.role = updateEmployeeProjectDto.role;
      this.employeeProjectRepository.save(empProj);
      return empProj;
    } else {
      throw NotFoundException;
    }
  }

  remove(id: number) {
    return this.employeeProjectRepository.delete({ id });
  }
}
