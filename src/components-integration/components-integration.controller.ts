import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentsIntegrationService } from './components-integration.service';
import { CreateComponentsIntegrationDto } from './dto/create-components-integration.dto';
import { UpdateComponentsIntegrationDto } from './dto/update-components-integration.dto';

@Controller('components-integration')
export class ComponentsIntegrationController {
  constructor(private componentsIntegrationService: ComponentsIntegrationService) {}

  @Post()
  create(@Body() createComponentsIntegrationDto: CreateComponentsIntegrationDto) {
    return this.componentsIntegrationService.create(createComponentsIntegrationDto);
  }

  @Get('all')
  findAll() {
    return this.componentsIntegrationService.findAll();
  }

  @Get()
  findOne(@Body('id') id: string) {
    return this.componentsIntegrationService.findOne(+id);
  }

  @Patch()
  update(@Body('id') id: string, @Body() updateComponentsIntegrationDto: UpdateComponentsIntegrationDto) {
    return this.componentsIntegrationService.update(+id, updateComponentsIntegrationDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.componentsIntegrationService.remove(+id);
  }
}
