import { PrismaService } from '@prisma/prisma.service';
import { CreateTodoDto } from '@todo/dto/create-todo.dto';
import { UpdateTodoDto } from '@todo/dto/update-todo.dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        title: string;
        description: string | null;
        done: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
