import { IsOptional, IsString, IsBoolean } from 'class-validator';

//DTO para actualizar tareas
export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}