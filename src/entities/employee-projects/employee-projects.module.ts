import { Module } from '@nestjs/common';
import { EmployeeProjectsService } from './employee-projects.service';
import { EmployeeProjectsController } from './employee-projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeProject } from './entities/employee-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeProject])],
  controllers: [EmployeeProjectsController],
  providers: [EmployeeProjectsService],
})
export class EmployeeProjectsModule {}
