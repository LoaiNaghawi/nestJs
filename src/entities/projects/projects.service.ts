import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}
  create(createProjectDto: CreateProjectDto) {
    try {
      let proj = new Project();
      proj.budget = createProjectDto.budget;
      proj.dept = createProjectDto.deptId;
      proj.endDate = createProjectDto.endDate;
      proj.projectName = createProjectDto.projectName;
      proj.startDate = createProjectDto.startDate;
      proj.status = createProjectDto.status;
      this.projectsRepository.save(proj);
      return proj;
    } catch (error) {
      console.log(error);
      return 'an error occured, try again later!';
    }
  }

  findAll() {
    return this.projectsRepository.find();
  }

  findOne(id: number) {
    return this.projectsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    let proj = await this.projectsRepository.findOneBy({ id });
    if (proj != null) {
      proj.budget = updateProjectDto.budget;
      proj.dept = updateProjectDto.deptId;
      proj.endDate = updateProjectDto.endDate;
      proj.projectName = updateProjectDto.projectName;
      proj.startDate = updateProjectDto.startDate;
      proj.status = updateProjectDto.status;
      this.projectsRepository.save(proj);
      return proj;
    } else
      throw new NotFoundException(`Project with ID = ${id} cannot be found`);
  }

  async remove(id: number) {
    if (!(await this.projectsRepository.findOneBy({ id }))) {
      throw new NotFoundException(`Project with ID = ${id} cannot be found`);
    }
    return this.projectsRepository.delete({ id });
  }
}
