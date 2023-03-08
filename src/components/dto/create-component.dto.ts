import { Type } from 'class-transformer';
import { IsString, IsNumber,IsOptional } from 'class-validator';
export class CreateComponentDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  subCategoryId?: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
