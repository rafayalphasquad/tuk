import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoryDto } from './create-sub-category.dto';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateSubCategoryDto extends PartialType(CreateSubCategoryDto) {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description?: string;
}
