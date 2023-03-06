import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentsIntegrationDto } from './create-components-integration.dto';

export class UpdateComponentsIntegrationDto extends PartialType(CreateComponentsIntegrationDto) {
    framework?: string;
    code?:string;
}
