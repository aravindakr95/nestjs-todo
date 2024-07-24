import { IsString } from "class-validator";

export class CreateTodo {
    @IsString()
    title: string;

    @IsString()
    description: string;
}