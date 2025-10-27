import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateTodoDto: UpdateTodoDto): any;
    remove(id: string): any;
}
