import {useContext} from 'react';
import {DataContext} from '../contexts/DataContext';

export function usePatientData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
