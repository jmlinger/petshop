import { Test, TestingModule } from '@nestjs/testing';
import { petsResolver } from './pets.resolver';
import { petsService } from './pets.service';

describe('petsResolver', () => {
  let resolver: petsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [petsResolver, petsService],
    }).compile();

    resolver = module.get<petsResolver>(petsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
