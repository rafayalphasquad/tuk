import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TemplatesIntegrationService } from './templates-integration.service';
import { CreateTemplatesIntegrationDto } from './dto/create-templates-integration.dto';
import { UpdateTemplatesIntegrationDto } from './dto/update-templates-integration.dto';

@Controller('templates-integration')
export class TemplatesIntegrationController {
  constructor(
    private readonly templatesIntegrationService: TemplatesIntegrationService,
  ) {}

  @Post()
  create(@Body() createTemplatesIntegrationDto: CreateTemplatesIntegrationDto) {
    return this.templatesIntegrationService.create(
      createTemplatesIntegrationDto,
    );
  }

  @Get()
  findAll() {
    return this.templatesIntegrationService.findAll();
  }

  @Get()
  findOne(@Body('id') id: string) {
    return this.templatesIntegrationService.findOne(+id);
  }

  @Patch()
  update(
    @Body('id') id: string,
    @Body() updateTemplatesIntegrationDto: UpdateTemplatesIntegrationDto,
  ) {
    return this.templatesIntegrationService.update(
      +id,
      updateTemplatesIntegrationDto,
    );
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.templatesIntegrationService.remove(+id);
  }
}
