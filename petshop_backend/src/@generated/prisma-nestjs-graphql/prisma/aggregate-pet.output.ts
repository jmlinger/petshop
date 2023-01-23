import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PetCountAggregate } from './pet-count-aggregate.output';
import { PetAvgAggregate } from './pet-avg-aggregate.output';
import { PetSumAggregate } from './pet-sum-aggregate.output';
import { PetMinAggregate } from './pet-min-aggregate.output';
import { PetMaxAggregate } from './pet-max-aggregate.output';

@ObjectType()
export class AggregatePet {

    @Field(() => PetCountAggregate, {nullable:true})
    _count?: PetCountAggregate;

    @Field(() => PetAvgAggregate, {nullable:true})
    _avg?: PetAvgAggregate;

    @Field(() => PetSumAggregate, {nullable:true})
    _sum?: PetSumAggregate;

    @Field(() => PetMinAggregate, {nullable:true})
    _min?: PetMinAggregate;

    @Field(() => PetMaxAggregate, {nullable:true})
    _max?: PetMaxAggregate;
}
