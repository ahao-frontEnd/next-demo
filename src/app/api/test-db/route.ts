import { db } from '../../../lib/db'
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 测试数据库连接 - 执行一个简单的查询
    const result = await db.execute(sql`SELECT NOW() as current_time, version() as pg_version`);
    return NextResponse.json({
      success: true,
      message: '数据库连接成功！',
      data: {
        currentTime: result[0].current_time,
        postgresVersion: result[0].pg_version,
      },
    });

  } catch (error) {
    console.error('数据库连接失败:', error);
    return NextResponse.json(
      {
        success: false,
        message: '数据库连接失败',
        error: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}