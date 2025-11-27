import { StrictMode } from 'react'

interface StrictModeProviderProps {
  children: React.ReactNode  
}

export const StrictModeProvider: React.FC<StrictModeProviderProps> = ({children}) => {
    return (
      <StrictMode>
        {children}
      </StrictMode>
    )
}