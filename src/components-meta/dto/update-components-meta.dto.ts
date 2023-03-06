import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentsMetaDto } from './create-components-meta.dto';

export class UpdateComponentsMetaDto extends PartialType(CreateComponentsMetaDto) {}
