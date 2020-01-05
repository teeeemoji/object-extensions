// module.exports = require('autoroll')(require('./package.json'))
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {terser} from 'rollup-plugin-terser'

module.exports = [
  {
    input: './index.js',
    output: {// umd
      file: 'dist/umd/index.umd.js',
      name: 'OE',
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      terser()
    ]
  }
]
