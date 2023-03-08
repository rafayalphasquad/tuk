import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateComponentsIntegrationDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  componentsId: number;
  @IsString()
  framework: string;
  @IsString()
  code: string;
}
