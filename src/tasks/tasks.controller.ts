import { Controller, Get, Post, Param, Body, Query, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-taks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  // TODO: Implement GET /tasks
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  // TODO: Implement GET /tasks/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  // TODO: Implement POST /tasks
  @Post()
  create(@Body() createTaskDto: any) {
    return this.tasksService.create(createTaskDto);
  }

  // TODO: Implement DELETE /tasks/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

  //Metodo Patch para poder actualizar las tareas que nosotros seleccionemos
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }
}
