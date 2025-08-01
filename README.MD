# 🧪 Prueba Técnica Backend - PGO

Este proyecto ha sido desarrollado como solución a la prueba técnica propuesta por el equipo de PGO. Se trata de una API REST construida con **NestJS** y **TypeScript**, cuyo objetivo es gestionar una lista de tareas (ToDo List).

---

## ✅ Funcionalidades implementadas

### Endpoints principales

- `GET /tasks`: devuelve todas las tareas. Permite filtrar por el campo `isDone` (`true` o `false`).
- `GET /tasks/:id`: obtiene una tarea por su ID.
- `POST /tasks`: crea una nueva tarea.
- `DELETE /tasks/:id`: elimina una tarea existente.
- `PATCH /tasks/:id`: actualiza los campos `title`, `description` o `isDone` de una tarea.

## 🧠 Extras incluidos

- Además de los requisitos principales, se han implementado las siguientes mejoras:

- DTOs (CreateTaskDto, UpdateTaskDto) para separar la lógica de validación.

- Validaciones con class-validator para asegurar que los datos enviados sean correctos (por ejemplo, que title y description no estén vacíos y sean strings).

- Control de errores: si se intenta acceder, actualizar o eliminar una tarea inexistente, se devuelve un error 404 con un mensaje claro.

- Persistencia simulada: los datos se guardan en memoria usando un array, tal como se solicitó (sin base de datos).

- Pruebas unitarias básicas del servicio (tasks.service.ts) para validar la lógica de negocio principal.

--

## 🧪 Tests
Se han implementado algunos tests con Jest para:

Crear una tarea

Obtener todas las tareas

Buscar una tarea por ID (tanto casos válidos como no encontrados)

Eliminar tareas

Comprobar comportamiento en errores

`npm run test`

Los tests se encuentran en:
src/tasks/tasks.service.spec.ts

## 🚀 Ejecución del proyecto

`docker-compose up --build`