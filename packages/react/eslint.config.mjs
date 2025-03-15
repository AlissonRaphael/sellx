import base from '@sellx/eslint-config';

export default [
  ...base,
  {
    settings: {
      react: { version: 'detect' },
    }
  },
]
