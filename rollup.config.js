import pkg from './package.json'

export default {
  input: './index.js',
  output: {
    name: 'safeget',
    file: pkg.browser,
    format: 'umd'
  }
}
