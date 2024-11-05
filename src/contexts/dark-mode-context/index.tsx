'use client'
import { createContext, useContext, useState } from 'react'

interface DarkModeContextType {
  isDarkModeActive: boolean
  setDarkMode: (value: boolean) => void
}

const DarkModeContext = createContext<DarkModeContextType>(
  {} as DarkModeContextType,
)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  return (
    <DarkModeContext.Provider
      value={{ isDarkModeActive: darkMode, setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)
