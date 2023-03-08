import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  kitsId?: number;
}
