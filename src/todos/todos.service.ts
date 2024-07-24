import { ForbiddenException, Injectable } from "@nestjs/common";
import { CreateTodo } from "./dtos/create-todo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoDocument } from "./schemas/todo.schema";

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {  
    }

    async create(createTodo: CreateTodo): Promise<Todo> {
        try {
            const createdTodo = new this.todoModel(createTodo);
            return createdTodo.save();
        } catch(error) {
            throw error;
        }
    }
    
    async find(): Promise<Todo[]> {
        return this.todoModel.find();
    }

    async findOne(id: string): Promise<Todo> {
        return this.todoModel.findById(id);
    }

    async update(id: string, updateDto: Partial<CreateTodo>): Promise<Todo> {
        return this.todoModel.findByIdAndUpdate(id, updateDto);
    }

    async delete(id: string): Promise<void> {
        this.todoModel.findByIdAndDelete(id).exec();
    }

}