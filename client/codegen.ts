
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./**/*.tsx",
  generates: {
    "generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
