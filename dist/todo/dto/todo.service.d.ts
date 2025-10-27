import { PrismaService } from '@prisma/prisma.service';
import { CreateTodoDto } from '@todo/dto/create-todo.dto';
import { UpdateTodoDto } from '@todo/dto/update-todo.dto';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTodoDto: CreateTodoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<any>;
    remove(id: number): Promise<any>;
}
