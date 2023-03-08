import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentDto } from './create-component.dto';
import { Type } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
export class UpdateComponentDto extends PartialType(CreateComponentDto) {
  @Type(() => Number)
  @IsNumber()
  subCategoryId?: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
