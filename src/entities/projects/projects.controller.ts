import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ summary: 'create a new project' })
  @ApiResponse({ status: 201, description: 'project created successfully' })
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'get a list of all projects' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get a project by id' })
  @ApiResponse({ status: 200, description: 'request was successful' })
  @ApiResponse({ status: 404, description: 'project was not found' })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a project' })
  @ApiResponse({ status: 200, description: 'project updated successfully' })
  @ApiResponse({ status: 404, description: 'project was not found' })
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete a project' })
  @ApiResponse({ status: 200, description: 'project deleted successfully' })
  @ApiResponse({ status: 404, description: 'project was not found' })
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.projectsService.remove(+id);
  }
}
