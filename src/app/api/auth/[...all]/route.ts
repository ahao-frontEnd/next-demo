// 从项目里拿到已经配置好的认证实例（比如登录、注册、回话等规则）
import { auth } from '@/lib/auth'
// 把认证实例转换成 Next.js 能直接使用的 API 处理器
import { toNextJsHandler } from 'better-auth/next-js'

// 生成并导出 Next.js 的 API 路由处理函数
// 这样 `/api/auth/*` 下的 GET/POST 请求都会交给认证库处理
export const { POST, GET } = toNextJsHandler(auth)
