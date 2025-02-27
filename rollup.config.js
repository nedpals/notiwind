// import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output:  [
    {
      file: 'dist/index.common.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    // vue(),
    resolve(),
    peerDepsExternal(),
    // commonjs(),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ],
};