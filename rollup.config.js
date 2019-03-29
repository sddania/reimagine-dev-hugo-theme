import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const globals = {firebase: 'firebase'};

export default {
    input: 'src/script/main.js',
    output: [
        {file: 'static/theme.js', format: 'esm', globals}
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    external: [
    ]
}