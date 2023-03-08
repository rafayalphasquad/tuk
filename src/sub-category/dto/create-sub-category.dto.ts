import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';
export class CreateSubCategoryDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  categoryId: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
