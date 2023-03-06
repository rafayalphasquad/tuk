import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesIntegrationController } from './templates-integration.controller';
import { TemplatesIntegrationService } from './templates-integration.service';

describe('TemplatesIntegrationController', () => {
  let controller: TemplatesIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesIntegrationController],
      providers: [TemplatesIntegrationService],
    }).compile();

    controller = module.get<TemplatesIntegrationController>(TemplatesIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
