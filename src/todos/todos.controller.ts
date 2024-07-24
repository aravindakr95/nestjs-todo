import { Body, Controller, Post, Param, Get, Patch, Delete, UseGuards } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodo } from "./dtos/create-todo.dto";
import { RolesGuard } from "src/common/guards/roles.guard";

/**
 * Responsible for create todo app for insert todo, update todo, get todo by id, get all todos, delete a todo
 */
@Controller('todos')
@UseGuards(RolesGuard)
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    async create(@Body() createTodo: CreateTodo): Promise<CreateTodo> {
        return this.todosService.create(createTodo);
    }

    @Get()
    async findAll(): Promise<CreateTodo[]> {
        return this.todosService.find();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<CreateTodo> {
        return this.todosService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateDto: Partial<CreateTodo>): Promise<CreateTodo> {
        return this.todosService.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.todosService.delete(id);
    }
}