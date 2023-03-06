import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UiKitsService } from './ui-kits.service';
import { CreateUiKitDto } from './dto/create-ui-kit.dto';
import { UpdateUiKitDto } from './dto/update-ui-kit.dto';

@Controller('ui-kits')
export class UiKitsController {
  constructor(private readonly uiKitsService: UiKitsService) {}

  @Post()
  create(@Body() createUiKitDto: CreateUiKitDto) {
    return this.uiKitsService.create(createUiKitDto);
  }

  @Get('all')
  findAll() {
    return this.uiKitsService.findAll();
  }

  @Get()
  findOne(@Body('id') id: string) {
    return this.uiKitsService.findOne(+id);
  }

  @Patch()
  update(@Body('id') id: string, @Body() updateUiKitDto: UpdateUiKitDto) {
    return this.uiKitsService.update(+id, updateUiKitDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.uiKitsService.remove(+id);
  }
}
