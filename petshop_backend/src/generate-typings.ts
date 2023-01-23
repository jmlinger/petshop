import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

// it creates generate-typings file to update definitions automatically.
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
