module.exports = {
  input: 'src/main.js',
  output: [
    {
      file: 'public/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'public/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'public/bundle.iife.js',
      format: 'iife'
    }
  ]
};