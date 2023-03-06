import { Injectable } from '@nestjs/common';
import { CreateComponentsMetaDto } from './dto/create-components-meta.dto';
import { UpdateComponentsMetaDto } from './dto/update-components-meta.dto';

@Injectable()
export class ComponentsMetaService {
  create(createComponentsMetaDto: CreateComponentsMetaDto) {
    return 'This action adds a new componentsMeta';
  }

  findAll() {
    return `This action returns all componentsMeta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} componentsMeta`;
  }

  update(id: number, updateComponentsMetaDto: UpdateComponentsMetaDto) {
    return `This action updates a #${id} componentsMeta`;
  }

  remove(id: number) {
    return `This action removes a #${id} componentsMeta`;
  }
}
