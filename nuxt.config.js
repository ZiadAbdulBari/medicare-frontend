export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Medicare',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet',  href: '/css/bootstrap.min.css' },
      // { rel: 'stylesheet',  href: '/css/mc-calendar.min.css' },
      { rel: 'stylesheet',  href: '/css/style.css' },
    ],
    script: [
      // { src: '/js/jquery-3.5.1.min.js', type: "text/javascript", body: true, ssr: false },
      { src: '/js/bootstrap.bundle.min.js',type: "text/javascript", body: true, ssr: false },
      { src: '/js/sweetalert2@11.js',type: "text/javascript", body: true, ssr: false },
      // { src: '/js/mc-calendar.min.js',type: "text/javascript", body: true, ssr: false },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/client-only-plugin.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL : "http://localhost:4000/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
