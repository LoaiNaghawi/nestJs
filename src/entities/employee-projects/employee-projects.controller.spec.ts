import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeProjectsController } from './employee-projects.controller';
import { EmployeeProjectsService } from './employee-projects.service';

describe('EmployeeProjectsController', () => {
  let controller: EmployeeProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeProjectsController],
      providers: [EmployeeProjectsService],
    }).compile();

    controller = module.get<EmployeeProjectsController>(EmployeeProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
