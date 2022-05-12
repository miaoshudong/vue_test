const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave: false,
  //开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */
  //开启代理服务器(方式二)

  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/atguigu': '' },
        ws: true, //支持websocket
        changeOrigin: true

      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true, //支持websocket
        changeOrigin: true

      },

    }
  }
}
