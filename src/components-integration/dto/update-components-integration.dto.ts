import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentsIntegrationDto } from './create-components-integration.dto';

import { IsOptional, IsString } from 'class-validator';

export class UpdateComponentsIntegrationDto extends PartialType(
  CreateComponentsIntegrationDto,
) {
  @IsOptional()
  @IsString()
  framework: string;
  @IsOptional()
  @IsString()
  code: string;
}
