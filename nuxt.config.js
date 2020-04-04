import env from './env'
export default {
  mode: 'universal',
  // mode: 'spa',
  server: {
    // port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "悦享推广",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'no-scale', name: "viewport", content: "width=device-width, initial-scale=1.0,user-scalable=no, viewport-fit=cover" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "//at.alicdn.com/t/font_1644987_yodir87xgmk.css" }
    ]
  },
  proxy: {
    '/api': {
      target: 'http://promote.brazz.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  env: {
    ...env[process.env.mode]
  },
  router: {
    middleware: ['auth'],
    // mode: "history"
    mode: "hash"
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1890ff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/lib/input/style/css',
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/message/style/css',
    'ant-design-vue/lib/progress/style/css',
    'ant-design-vue/lib/row/style/css',
    'ant-design-vue/lib/col/style/css',
    'ant-design-vue/lib/form/style/css',
    'ant-design-vue/lib/icon/style/css',
    'ant-design-vue/lib/carousel/style/css',
    'ant-design-vue/lib/modal/style/css',
    'ant-design-vue/lib/input-number/style/css',
    'ant-design-vue/lib/tabs/style/css',
    'ant-design-vue/lib/drawer/style/css',
    {
      src: '@/assets/scss/375-vw.scss',
      lang: "scss"
    },
    {
      src: '@/assets/scss/reset.scss',
      lang: "scss"
    },
    {
      src: '@/assets/scss/common.scss',
      lang: "scss"
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ant-design-vue',
    '@/plugins/vue-clipboard',
    '@/plugins/main'
    // "@/plugins/auth",
    // "@/plugins/axios"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/component-cache',
    '@nuxtjs/proxy'
  ],
  /**
   * Render configuration
   */

  // render: {
  //   etag: false,
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: {
      analyzerMode: "server"
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        // maxAsyncRequests: 20,
        maxSize: 300000,
        cacheGroups: {
          antdesign: {
            test(module, chunks) {
              // `module.resource` contains the absolute path of the file on disk.
              // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
              return module.resource &&
                module.resource.includes('ant-design')
            },
            chunks: 'all',
            priority: 20,
            name: true
          },
          vue: {
            test: /node_modules[\\/]vue/,
            chunks: 'all',
            priority: 20,
            name: true
          },
        }
      }
    },
    extend(config, ctx) {
    }
  }
}
