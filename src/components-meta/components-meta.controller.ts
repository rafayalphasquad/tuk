import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentsMetaService } from './components-meta.service';
import { CreateComponentsMetaDto } from './dto/create-components-meta.dto';
import { UpdateComponentsMetaDto } from './dto/update-components-meta.dto';

@Controller('components-meta')
export class ComponentsMetaController {
  constructor(private readonly componentsMetaService: ComponentsMetaService) {}

  @Post()
  create(@Body() createComponentsMetaDto: CreateComponentsMetaDto) {
    return this.componentsMetaService.create(createComponentsMetaDto);
  }

  @Get()
  findAll() {
    return this.componentsMetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentsMetaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentsMetaDto: UpdateComponentsMetaDto) {
    return this.componentsMetaService.update(+id, updateComponentsMetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentsMetaService.remove(+id);
  }
}
