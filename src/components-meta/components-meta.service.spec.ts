import { Test, TestingModule } from '@nestjs/testing';
import { ComponentsMetaService } from './components-meta.service';

describe('ComponentsMetaService', () => {
  let service: ComponentsMetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentsMetaService],
    }).compile();

    service = module.get<ComponentsMetaService>(ComponentsMetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
