import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateTodoDto } from '@todo/dto/create-todo.dto';
import { UpdateTodoDto } from '@todo/dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({ data: createTodoDto });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);
    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const existing = await this.prisma.todo.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Todo with id ${id} not found`);

    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.todo.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Todo with id ${id} not found`);

    return this.prisma.todo.delete({ where: { id } });
  }
}
