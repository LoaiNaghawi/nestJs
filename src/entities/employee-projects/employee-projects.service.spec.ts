import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeProjectsService } from './employee-projects.service';

describe('EmployeeProjectsService', () => {
  let service: EmployeeProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeProjectsService],
    }).compile();

    service = module.get<EmployeeProjectsService>(EmployeeProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
