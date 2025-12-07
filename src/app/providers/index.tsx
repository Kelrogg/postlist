import { StrictModeProvider } from "./StrictModeProvider"
import { ReduxStoreProvider } from "./ReduxStoreProvider"

interface AllInOneProviderProps {
  children: React.ReactNode
}

export const AllInOneProvider: React.FC<AllInOneProviderProps> = ({ children }) => {
  return (
    <StrictModeProvider>
      <ReduxStoreProvider>
        {children}
      </ReduxStoreProvider>
    </StrictModeProvider>
  )
};