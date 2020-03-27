import { getToken } from '../tools/token'
export default async ({ app, route, error }) => {
  const whiteList = ["/login", "/"]
  if (!whiteList.includes(route.path)) {
    if (process.client) {
      if (!getToken()) {
        error({ message: "you are not allow to access this page", statusCode: 403 })
      }
    }
  }


}