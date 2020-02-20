
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "//at.alicdn.com/t/font_1644987_ztc27jdn0vn.css" }
    ]
  },
  router: {
    // middleware: ['auth']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1890ff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
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
    '@/plugins/antd-ui',
    "@/plugins/auth"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
