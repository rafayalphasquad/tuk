import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  create(createTemplateDto: CreateTemplateDto) {
    return this.prisma.templates.create({
      data: {
        name: createTemplateDto.name,
        description: createTemplateDto.description,
      },
      include: {
        users: true,
      },
    });
  }

  findAll() {
    return this.prisma.templates.findMany();
  }

  findOne(id: number) {
    return this.prisma.templates.findUnique({
      where: {
        id: id,
      },
      include:{
        transactions:true
      }
    });
  }

  update(id: number, updateTemplateDto: UpdateTemplateDto) {
    return this.prisma.templates.update({
      where: {
        id: id,
      },
      data: updateTemplateDto,
    });
  }

  remove(id: number) {
    return this.prisma.templates.delete({
      where: {
        id: id,
      },
    });
  }
}
