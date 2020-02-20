export default ({ route, redirect, app }) => {
   app.router.beforeEach((to, from, next) => {
      // NProgress.start()
      next()
   })
   app.router.afterEach(() => {
     
   })
}