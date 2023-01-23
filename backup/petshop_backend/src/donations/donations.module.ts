import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsResolver } from './donations.resolver';

@Module({
  providers: [PrismaService, DonationsResolver, DonationsService],
})
export class DonationsModule {}
