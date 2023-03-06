import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsMetaController } from './components-meta.controller';
import { ComponentsMetaService } from './components-meta.service';

describe('ComponentsMetaController', () => {
  let controller: ComponentsMetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComponentsMetaController],
      providers: [ComponentsMetaService],
    }).compile();

    controller = module.get<ComponentsMetaController>(ComponentsMetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
