import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import type { Theme } from './ThemeProvider';

export const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
  const context = useContext(ThemeContext);
  
  if (context === undefined || context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};