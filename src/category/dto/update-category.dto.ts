import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  kitsId?: number;
}
