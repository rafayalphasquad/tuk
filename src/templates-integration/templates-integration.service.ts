import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTemplatesIntegrationDto } from './dto/create-templates-integration.dto';
import { UpdateTemplatesIntegrationDto } from './dto/update-templates-integration.dto';

@Injectable()
export class TemplatesIntegrationService {
  constructor(private prisma: PrismaService) {}

  create(createTemplatesIntegrationDto: CreateTemplatesIntegrationDto) {
    return this.prisma.templatesIntegration.create({
      data: {
        framework: createTemplatesIntegrationDto.framework,
        code: createTemplatesIntegrationDto.code,
      },
    });
  }

  findAll() {
    return this.prisma.templatesIntegration.findMany();
  }

  findOne(id: number) {
    return this.prisma.templatesIntegration.findMany({
      where: {
        id: id,
      },
    });
  }

  update(
    id: number,
    updateTemplatesIntegrationDto: UpdateTemplatesIntegrationDto,
  ) {
    return this.prisma.templatesIntegration.update({
      where: {
        id: id,
      },
      data: updateTemplatesIntegrationDto,
    });
  }

  remove(id: number) {
    return this.prisma.templatesIntegration.delete({
      where: {
        id: id,
      },
    });
  }
}
