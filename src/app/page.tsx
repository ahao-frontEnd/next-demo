'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await authClient.getSession()
        setIsLoggedIn(!!res.data?.session)
      } catch (error) {
        console.error('检查登录状态失败:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">加载中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Better-Auth 示例应用
          </h1>
          
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">功能演示</h2>
            
            {!isLoggedIn ? (
              <div className="space-y-4">
                <Link 
                  href="/register"
                  className="inline-block w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-center"
                >
                  📝 注册账户
                </Link>
                
                <Link 
                  href="/login"
                  className="inline-block w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-center"
                >
                  🔐 登录账户
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <Link 
                  href="/profile"
                  className="inline-block w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-center"
                >
                  👤 查看个人信息
                </Link>
                
                <div className="text-sm text-gray-600 mt-4">
                  您已登录，可以访问受保护的页面
                </div>
              </div>
            )}
          </div>

          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">API 路由测试</h3>
            <div className="space-y-3">
              <a 
                href="/api/test-db" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                测试数据库连接
              </a>
              
              <a 
                href="/api/test-db/users" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                获取所有用户
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}