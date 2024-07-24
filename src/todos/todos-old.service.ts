// import { Injectable } from "@nestjs/common";
// import { CreateTodo } from "./dtos/create-todo.dto";

// @Injectable()
// export class TodosOldService {
//     private todos: CreateTodo[] = [];

//     create(createTodo: CreateTodo): CreateTodo {
//         this.todos.push(createTodo);
//         return createTodo;
//     }
    
//     find(): CreateTodo[] {
//         return this.todos;
//     }

//     findOne(id: string): CreateTodo {
//         return this.todos.find((todo) => todo.id === id);
//     }

//     update(id: string, updateDto: Partial<CreateTodo>): CreateTodo {
//         let element = null;

//         this.todos.forEach((todo) => {
//             if (todo.id === id) {
//                 Object.assign(todo, updateDto);
//                 element = todo;
//             }
//         });

//         return element;
//     }

//     delete(id: string): void {
//         const newTodos = this.todos.filter((todo) => {
//             if (todo.id !== id) {
//                 return true;
//             }
//         })

//         this.todos = newTodos;
//     }

// }