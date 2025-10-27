import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
