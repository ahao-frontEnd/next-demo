import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// 加载 .env 文件
dotenv.config();

if (!process.env.DB_URL) {
  throw new Error('DB_URL environment variable is not set');
}

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './drizzle', // 迁移文件输出目录
  dialect: 'postgresql', // 指定数据库方言
  dbCredentials: {
    url: process.env.DB_URL,
  },
});