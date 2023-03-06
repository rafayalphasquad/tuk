import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesIntegrationService } from './templates-integration.service';

describe('TemplatesIntegrationService', () => {
  let service: TemplatesIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplatesIntegrationService],
    }).compile();

    service = module.get<TemplatesIntegrationService>(TemplatesIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
