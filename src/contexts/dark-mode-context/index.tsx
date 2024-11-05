'use client'

import { createContext, useContext, useState } from 'react'

/**
 * Interface representing the context type for dark mode.
 */
interface DarkModeContextType {
  /**
   * Indicates whether dark mode is active.
   */
  isDarkModeActive: boolean
  /**
   * Function to set the dark mode state.
   * @param value - The new state of dark mode.
   */
  setDarkMode: (value: boolean) => void
}

/**
 * Context for managing dark mode state.
 */
const DarkModeContext = createContext<DarkModeContextType>(
  {} as DarkModeContextType,
)

/**
 * Provider component for dark mode context.
 * @param children - The child components that will have access to the dark mode context.
 */
export function DarkModeProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  return (
    <DarkModeContext.Provider
      value={{ isDarkModeActive: darkMode, setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

/**
 * Custom hook to use the dark mode context.
 * @returns The dark mode context value.
 */
export const useDarkMode = () => useContext(DarkModeContext)
