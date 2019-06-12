# rollup-demo

## 优点

* 配置简单，所有 [文档]((https://rollupjs.org/guide/en/))（包括使用文档和开发文档）就一页（[详细配置项](https://rollupjs.org/guide/en/#big-list-of-options)）
* 打包结果大小比 webpack 小，适合打包 js library
* 自带 tree shaking

## 配置

### Importing CommonJS

CommonJS 方式引用包需要 [额外配置](https://github.com/rollup/rollup-plugin-commonjs)，**且需要配置在 plugin 的最前**

一般需要和 [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve) 一起使用（这个包是为了能打包 node_modules 中的模块）

### Babel

详见 [文档](https://rollupjs.org/guide/en/#babel)

### Uglify

[rollup-plugin-uglify](https://github.com/TrySound/rollup-plugin-uglify)
