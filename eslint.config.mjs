import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.github/**',
  ]),
  ...nextVitals.map((config) => {
    if (config.name === 'next/typescript') {
      return {
        ...config,
        rules: {
          ...config.rules,
          '@typescript-eslint/ban-ts-comment': 'warn',
          '@typescript-eslint/no-empty-object-type': 'warn',
          '@typescript-eslint/no-explicit-any': 'warn',
          '@typescript-eslint/no-unused-vars': [
            'warn',
            {
              vars: 'all',
              args: 'after-used',
              ignoreRestSiblings: false,
              argsIgnorePattern: '^_',
              varsIgnorePattern: '^_',
              destructuredArrayIgnorePattern: '^_',
              caughtErrorsIgnorePattern: '^(_|ignore)',
            },
          ],
        },
      }
    }

    return config
  }),
])

export default eslintConfig
