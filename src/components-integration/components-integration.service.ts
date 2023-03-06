import { Injectable } from '@nestjs/common';
import { CreateComponentsIntegrationDto } from './dto/create-components-integration.dto';
import { UpdateComponentsIntegrationDto } from './dto/update-components-integration.dto';
import { PrismaService } from 'src/prisma/migrations/prisma.service';

@Injectable()
export class ComponentsIntegrationService {
  constructor(private prisma:PrismaService){}
  create(createComponentsIntegrationDto: CreateComponentsIntegrationDto) {
    return this.prisma.componentsIntegration.create({
      data: createComponentsIntegrationDto
    });
  }

  findAll() {
    return this.prisma.componentsIntegration.findMany();
  }

  findOne(id: number) {
     return this.prisma.componentsIntegration.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateComponentsIntegrationDto: UpdateComponentsIntegrationDto) {
    return this.prisma.componentsIntegration.update({
      where: {
        id: id,
      },
      data: {
        code: updateComponentsIntegrationDto.code,
        framework: updateComponentsIntegrationDto.framework
       
      },
    });  ;
  }

  remove(id: number) {
    return this.prisma.componentsIntegration.delete({
      where: {
        id: id,
      },
    }); 
  }
}
