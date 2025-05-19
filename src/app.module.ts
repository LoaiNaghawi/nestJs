import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './fruits/fruits.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './entities/employee/employee.module';
import { DepartmentModule } from './entities/department/department.module';
import { EmployeeController } from './entities/employee/employee.controller';
import { Employee } from './entities/employee/entities/employee.entity';
import { Department } from './entities/department/entities/department.entity';
import { ProjectsModule } from './entities/projects/projects.module';
import { EmployeeProjectsModule } from './entities/employee-projects/employee-projects.module';
import { Project } from './entities/projects/entities/project.entity';
import { EmployeeProject } from './entities/employee-projects/entities/employee-project.entity';
import { EmailModule } from './email/email.module';
import { Email } from './email/entities/email.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    FruitsModule,
    EmployeeModule,
    DepartmentModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: '127.0.0.1', // Hostname of the database server
      port: 3306, // Default port for MySQL
      username: 'root', // Default username for MySQL
      password: 'Ahmad@123', // Default password (often empty for local development)
      database: 'nest', // Default database name
      synchronize: false, // Automatically synchronize the database schema with the entities
      logging: false, // Disable logging
      entities: [
        Employee,
        Department,
        Project,
        EmployeeProject,
        Email,
        User,
        // 'src/entities/**/entities/*.ts', // Path to the entity files
      ],
    }),
    ProjectsModule,
    EmployeeProjectsModule,
    EmailModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
