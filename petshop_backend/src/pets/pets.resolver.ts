import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { petCreateInput } from 'src/@generated/prisma-nestjs-graphql/pet/pet-create.input';
import { UpdatePetInput } from 'src/graphql';

// import { PubSub } from 'graphql-subscriptions';

// const pubSub = new PubSub();

@Resolver('pet')
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Mutation('createPet')
  async create(
    @Args('createPetInput')
    createPetInput: any,
  ) {
    const created = await this.petsService.create(createPetInput);

    // const total = await this.petsService.getTotal();

    // pubSub.publish('totalUpdated', { totalUpdated: { total } });

    return created;
  }

  @Query('pets')
  findAll() {
    return this.petsService.findAll();
  }

  @Mutation('updatePet')
  update(
    @Args('updatePetInput')
    updatePetInput: any,
  ) {
    const { id } = updatePetInput;
    return this.petsService.update({ id }, updatePetInput);
  }

  @Mutation('removePet')
  remove(@Args('id') id: number) {
    return this.petsService.remove({ id });
  }
}
