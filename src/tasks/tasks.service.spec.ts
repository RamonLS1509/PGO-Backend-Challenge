import { TasksService } from './tasks.service';
import { NotFoundException } from '@nestjs/common';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('Crea una nueva tarea', () => {
    const task = service.create({ title: 'Test', description: 'Test desc', isDone: false });
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Test');
    expect(task.description).toBe('Test desc');
    expect(task.isDone).toBe(false);
  });

  it('Devuelve todas las tareas', () => {
    service.create({ title: 'One', description: 'First', isDone: false });
    service.create({ title: 'Two', description: 'Second', isDone: false });

    const tasks = service.findAll();
    expect(tasks.length).toBe(2);
  });

  it('Devuelve una tarea filtrada por ID', () => {
    const created = service.create({ title: 'Solo', description: 'Only one', isDone: false });
    const task = service.findOne(created.id);
    expect(task.title).toBe('Solo');
  });

  it('Deberia lanzar un throw error por no encontrar un ID', () => {
    expect(() => service.findOne(999)).toThrow(NotFoundException);
  });

  it('Borra una tarea por ID', () => {
    const task = service.create({ title: 'ToDelete', description: 'Temp', isDone: false });
    service.remove(task.id);
    expect(service.findAll()).toHaveLength(0);
  });

  it('Lanza un error al intentar borrar una tarea que no existe', () => {
    expect(() => service.remove(123)).toThrow(NotFoundException);
  });
});