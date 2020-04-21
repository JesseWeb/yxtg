import env from './env'
export default {
  // mode: 'universal',
  mode: 'spa',
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
      { name: "viewport", content: "width=device-width, initial-scale=1.0,user-scalable=no, viewport-fit=cover" },
      { "http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { "http-equiv": "Pragma", content: "no-cache" },
      { "http-equiv": "Expires", content: "0" },
      { "name": "x5-fullscreen", content: true },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: "//at.alicdn.com/t/font_1644987_nb0ve27kypq.css" }
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
    mode: "history",
    // mode: "hash"
    fallback: true
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1890ff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '@/assets/scss/375-vw.scss',
      lang: "scss",
    },
    {
      src: '@/assets/scss/reset.scss',
      lang: "scss"
    },
    {
      src: '@/assets/scss/common.scss',
      lang: "scss"
    },

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ant-design-vue',
    '@/plugins/vue-clipboard',
    '@/plugins/main',
    '@/plugins/babel-polyfill'
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
    '@nuxtjs/proxy',
  ],
  /**
   * Render configuration
   */

  // render: {
  //   etag: false,
  //   static: {
  //     maxAge: -1
  //   }
  // },
  /*
  ** Build configuration
  */

  // build: {
  //   filenames: {
  //     chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[contenthash].js'
  //   }
  // }
  build: {
    /*
    ** You can extend webpack config here
    */
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    // analyze: process.env.mode == "development" ? {
    //   analyzerMode: "server"
    // } : false,
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 20,
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
    loaders: {
      less: {
        javascriptEnabled:true
      }
    },
    babel: {
      presets: ["@nuxt/babel-preset-app"],
      plugins: [
        [
          "import",
          { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
        ]
      ],
    },
    extend(config, ctx) {
    }
  }
}
