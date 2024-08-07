import React, { createContext } from 'react'

interface AuthContextValue {
  auth: any
  authLoading: boolean
  setAuth: React.Dispatch<React.SetStateAction<null>>
}

const DEFAULT_VALUE: AuthContextValue = {
  auth: null,
  authLoading: true,
  setAuth: () => {},
}

export const AuthContext = createContext(DEFAULT_VALUE)
