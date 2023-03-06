import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto) {
    return this.templatesService.create(createTemplateDto);
  }

  @Get('all')
  findAll() {
    return this.templatesService.findAll();
  }

  @Get()
  findOne(@Body('id') id: number) {
    return this.templatesService.findOne(+id);
  }

  @Patch()
  update(@Body('id') id: string, @Body() updateTemplateDto: UpdateTemplateDto) {
    return this.templatesService.update(+id, updateTemplateDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.templatesService.remove(+id);
  }
}
