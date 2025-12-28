import { StrictModeProvider } from "./StrictModeProvider"
import { ReduxStoreProvider } from "./store/ReduxStoreProvider"
import { ThemeProvider } from "~/shared/lib/theme/ThemeProvider"

interface AllInOneProviderProps {
  children: React.ReactNode
}

export const AllInOneProvider: React.FC<AllInOneProviderProps> = ({ children }) => {
  return (
    <StrictModeProvider>
      <ThemeProvider>
        <ReduxStoreProvider>
          {children}
        </ReduxStoreProvider>
      </ThemeProvider>
    </StrictModeProvider>
  )
};