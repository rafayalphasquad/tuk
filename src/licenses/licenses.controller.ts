import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicensesService } from './licenses.service';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';

@Controller('licenses')
export class LicensesController {
  constructor(private licensesService: LicensesService) {}

  @Post()
  create(@Body() createLicenseDto: CreateLicenseDto) {
    return this.licensesService.create(createLicenseDto);
  }

  @Get('all')
  findAll() {
    return this.licensesService.findAll();
  }

  @Get()
  findOne(@Body('id') id: number) {
   
    return this.licensesService.findOne(+id);
  }

  @Patch()
  update(@Body('id') id: string, @Body() updateLicenseDto: UpdateLicenseDto) {
    return this.licensesService.update(+id, updateLicenseDto);
  }

  @Delete()
  remove(@Body('id') id: string) {
    return this.licensesService.remove(+id);
  }
}
