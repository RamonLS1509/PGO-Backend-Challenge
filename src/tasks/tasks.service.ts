import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-taks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  //Metodo para buscar todas las tareas
  findAll(): Task[] {
    return this.tasks;
  }

  //Metodo para buscar las tareas que contengan el ID seleccionado
  findOne(id: number): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`La tarea con el ID: ${id} no se encuentra disponible`);
    }
    return task;
  }

  //Metodo para crear una tarea añadiendo un id incremental, un titulo, una descripción y el estado actual de la tarea que por defecto sera false (es decir, por hacer)
  create(createTaskDto: { title: string; description: string; isDone: boolean }): Task {
    const newTask: Task = {
      id: this.nextId++,
      title: createTaskDto.title,
      description: createTaskDto.description,
      isDone: createTaskDto.isDone ?? false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  //Metodo para eliminar una tarea filtrando por el id ya que es único y no eliminaremos otras tareas por error.
  remove(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`La tarea con el ID: ${id} no se encuentra disponible`);
    }
    this.tasks.splice(index, 1);
  }

  //Metodo para actualizar las tareas pudiendo modificar el nombre, la descripción y el estado de la tarea seleccionada
  update(id: number, updateDto: UpdateTaskDto): Task {
    const task = this.findOne(id);

    if (updateDto.title !== undefined) {
      task.title = updateDto.title;
    }

    if (updateDto.description !== undefined) {
      task.description = updateDto.description;
    }

    if (updateDto.isDone !== undefined) {
      task.isDone = updateDto.isDone;
    }

    return task;
  }
}
