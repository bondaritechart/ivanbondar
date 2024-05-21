import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  overwrite: true,
  documents: ['src/**/*.graphql', 'src/app/graphql/**/*.ts'],
  config: {
    noNamespaces: true,
    dedupeOperationSuffix: true,
    preResolveTypes: true,
  },
  generates: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    './src/typings/generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  require: [],
}
export default config
