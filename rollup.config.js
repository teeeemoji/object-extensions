import pkg from './package.json'

export default {
  input: './index.js',
  output: {
    name: 'sget',
    file: pkg.browser,
    format: 'umd'
  }
}
