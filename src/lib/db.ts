import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'

if (!process.env.DB_URL) {
  throw new Error('DB_URL is not defined in environment variables');
}
// 创建数据库连接
const client = postgres(process.env.DB_URL)
// 初始化 Drizzle ORM（Object–relational mapping 对象关系映射）
export const db = drizzle(client);

