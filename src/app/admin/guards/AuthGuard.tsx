'use client'

import { useContext } from 'react'

import { Routes } from 'constants/routes'
import { AuthContext } from 'lib/auth/AuthContext'
import { useRouter } from 'next/navigation'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { auth, authLoading } = useContext(AuthContext)
  const router = useRouter()
  if (authLoading) {
    return <div>Loading...</div>
  }

  if (!auth) {
    router.push(Routes.SIGN_IN)

    return <div>Not authorized</div>
  }

  return children
}
