import { PrismaService } from '../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
  providers: [PrismaService, PetsResolver, PetsService],
})
export class PetsModule {}
