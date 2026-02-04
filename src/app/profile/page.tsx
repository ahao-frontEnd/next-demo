'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [logoutLoading, setLogoutLoading] = useState(false)
  const router = useRouter()

  // 获取用户信息
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await authClient.getSession()
        if (res.data?.user) {
          setUser(res.data.user)
        } else {
          // 未登录，跳转到登录页
          router.push('/login')
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    setLogoutLoading(true)
    try {
      await authClient.signOut()
      // 退出登录后跳转到登录页
      router.push('/login')
    } catch (error) {
      console.error('退出登录失败:', error)
    } finally {
      setLogoutLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">加载中...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">用户信息</h1>
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">姓名</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-900">
                  {user.name || '未设置'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">邮箱地址</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-900">
                  {user.email}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">用户ID</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-gray-900 text-sm font-mono">
                  {user.id}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {logoutLoading ? '退出中...' : '退出登录'}
              </button>
            </div>

            <div className="mt-4">
              <a 
                href="/" 
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                ← 返回首页
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}