'use client'

import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { CookiesNames } from 'constants/cookies'
import { ApiRoutes } from 'constants/routes'
import Cookies from 'js-cookie'
import { AuthContext } from 'lib/auth/AuthContext'

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get(CookiesNames.AUTH_TOKEN)
    if (token) {
      setLoading(true)
      axios
        .get(process.env.NEXT_PUBLIC_API_URL + ApiRoutes.GET_USER, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAuth(res.data)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
      // router.push(Routes.SIGN_IN)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        authLoading: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
