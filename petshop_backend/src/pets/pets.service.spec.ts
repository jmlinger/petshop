import { Test, TestingModule } from '@nestjs/testing';
import { petsService } from './pets.service';

describe('petsService', () => {
  let service: petsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [petsService],
    }).compile();

    service = module.get<petsService>(petsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
