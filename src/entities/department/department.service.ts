import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class DepartmentService {
  constructor(
    private readonly emailService: EmailService,
    @InjectRepository(Department)
    private departmentsRepository: Repository<Department>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      let dept = new Department();
      dept.budget = createDepartmentDto.budget;
      dept.createdDate = createDepartmentDto.createdDate;
      dept.departmentName = createDepartmentDto.departmentName;
      dept.location = createDepartmentDto.location;
      dept.mgr = createDepartmentDto.mgrId;
      this.departmentsRepository.save(dept);
      await this.emailService.sendMail(
        'talha.alshafeey@realsoft-me.com',
        'New Department (Loai nestJs)',
        `New department (${dept.departmentName}) added`,
      );
      return dept;
    } catch (error) {
      console.log(error);
      return 'An error occured, please try again later!';
    }
  }

  findAll() {
    return this.departmentsRepository.find();
  }

  findOne(id: number) {
    return this.departmentsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    let dept = await this.departmentsRepository.findOneBy({ id });
    if (!dept) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    dept.budget = updateDepartmentDto.budget;
    dept.createdDate = updateDepartmentDto.createdDate;
    dept.departmentName = updateDepartmentDto.departmentName;
    dept.location = updateDepartmentDto.location;
    dept.mgr = updateDepartmentDto.mgrId;
    this.departmentsRepository.save(dept);
    return dept;
  }

  async remove(id: number) {
    let dept = await this.departmentsRepository.findOneBy({ id });
    if (!dept) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    this.departmentsRepository.delete({ id });
    return `Department with ID ${id} has been deleted`;
  }
}
