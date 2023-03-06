import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplatesIntegrationDto } from './create-templates-integration.dto';

export class UpdateTemplatesIntegrationDto extends PartialType(
  CreateTemplatesIntegrationDto,
) {
  framework: string;
  code: string;
  templatesId?: number;
}
