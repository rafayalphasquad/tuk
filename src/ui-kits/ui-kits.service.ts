import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUiKitDto } from './dto/create-ui-kit.dto';
import { UpdateUiKitDto } from './dto/update-ui-kit.dto';

@Injectable()
export class UiKitsService {
  constructor(private prisma: PrismaService) {}

  create(createUiKitDto: CreateUiKitDto) {
    return this.prisma.uiKits.create({
      data: {
        name: createUiKitDto.name,
        description: createUiKitDto.description,
        licensesId: createUiKitDto.licensesId,
      },
    });
  }

  findAll() {
    return this.prisma.uiKits.findMany();
  }

  findOne(id: number) {
    return this.prisma.uiKits.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateUiKitDto: UpdateUiKitDto) {
    return this.prisma.uiKits.update({
      where: {
        id: id,
      },
      data: updateUiKitDto,
    });
  }

  remove(id: number) {
    return this.prisma.uiKits.delete({
      where: {
        id: id,
      },
    });
  }
}
