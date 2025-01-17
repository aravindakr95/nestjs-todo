import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from "./schemas/todo.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
    controllers: [TodosController],
    providers: [TodosService],
    exports: []
})
export class TodosModule {}