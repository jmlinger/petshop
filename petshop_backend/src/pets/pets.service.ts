import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  create(createPetInput: Prisma.petCreateInput) {
    return this.prisma.pet.create({
      data: createPetInput,
    });
  }

  findAll() {
    return this.prisma.pet.findMany();
  }

  update(
    id: Prisma.petWhereUniqueInput,
    updatePetInput: Prisma.petUpdateInput,
  ) {
    return this.prisma.pet.update({
      where: id,
      data: updatePetInput,
    });
  }

  remove(id: Prisma.petWhereUniqueInput) {
    return this.prisma.pet.delete({
      where: id,
    });
  }
}
