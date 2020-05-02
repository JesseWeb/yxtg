import { getToken } from '../tools/token'
export default async ({ app, route, error }) => {
  const whiteList = ["/login", "/","/register","/forgetpwd",'/commission','/rules','/authorize_taobao','/ground']
  if (!whiteList.includes(route.path)) {
    if (process.client) {
      if (!getToken()) {
        error({ message: "you are not allow to access this page", statusCode: 403 })
      }
    }
  }
}