import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from './db'
import * as schema from './schema'

// 创建并导出一个 auth 实例，后面登录/注册等功能都会用它
export const auth = betterAuth({
  // 指定数据库适配器（用 drizzle 连接数据库）
  database: drizzleAdapter(db, {
    // 数据库类型，这里是 PostgreSQL
    provider: 'pg',
    // 数据库表结构（schema）配置
    schema
  }),
  // 启用账号密码登录方式
  emailAndPassword: {
    enabled: true,
    // 是否要求邮箱验证后才能登录，这里是关闭
    requireEmailVerification: false
  }
})
