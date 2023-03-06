import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsIntegrationController } from './components-integration.controller';
import { ComponentsIntegrationService } from './components-integration.service';

describe('ComponentsIntegrationController', () => {
  let controller: ComponentsIntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentsIntegrationController],
      providers: [ComponentsIntegrationService],
    }).compile();

    controller = module.get<ComponentsIntegrationController>(ComponentsIntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
