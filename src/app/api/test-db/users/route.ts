import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 插入两个用户测试数据
    const result = await db.insert(users).values([
      {
        id: 'user-1',
        username: 'testuser1',
        email: 'testuser1@example.com',
        image: 'https://example.com/avatar1.jpg',
        intro: '这是第一个测试用户111',
      },
      {
        id: 'user-2',
        username: 'testuser2',
        email: 'testuser2@example.com',
        image: 'https://example.com/avatar2.jpg',
        intro: '这是第二个测试用户222',
      },
    ]).returning();

    return NextResponse.json({
      success: true,
      message: '成功插入两个用户测试数据',
      data: result,
    });

  } catch (error) {
    console.error('插入用户数据失败:', error);
    return NextResponse.json(
      {
        success: false,
        message: '插入用户数据失败',
        error: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}
