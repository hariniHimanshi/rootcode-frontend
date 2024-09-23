import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface ThemeContextType {
  bg_theme: string;
  bg_toggleTheme: () => void;
}

// Create the context with a default value (can be null)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bg_theme, setTheme] = useState<string>('light');

  // Toggle between 'light' and 'dark'
  const bg_toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ bg_theme, bg_toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
