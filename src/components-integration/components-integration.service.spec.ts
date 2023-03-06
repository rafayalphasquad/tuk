import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsIntegrationService } from './components-integration.service';

describe('ComponentsIntegrationService', () => {
  let service: ComponentsIntegrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentsIntegrationService],
    }).compile();

    service = module.get<ComponentsIntegrationService>(ComponentsIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
