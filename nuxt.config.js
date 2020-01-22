module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://at.alicdn.com/t/font_1360760_x72ap3v8ab9.css'
      },
    ],
    script: [{
      rel: 'script',
      type: 'text/javascript',
      src: 'https://at.alicdn.com/t/font_1360760_x72ap3v8ab9.js'
    }, ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00AAFF'
  },
  /*
   ** Global CSS
   */
  css: [
	  { src: '~/assets/style/reset.less', lang: 'less'}, 
	  { src: '~/assets/style/common/index.less', lang: 'less'}, 
	],
  styleResources: {
    less: '~/assets/style/variable.less'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/directive',
      ssr: false
    },
    '~/plugins/axios',
    '~/plugins/vant',
    {
      src: '~/plugins/better-scroll',
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  proxy: {
    '/client': {
      target: process.env.NODE_ENV === 'production' ? 'http://39.98.245.40:9000' : 'http://39.98.245.40:9000', // 39.98.245.40:9000   //192.168.8.13:19300
      pathRewrite: {
        '^/client': '/',
        changeOrigin: true,
      },
    },
  },
}
