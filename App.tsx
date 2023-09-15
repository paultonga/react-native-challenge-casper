import {NavigationContainer} from '@react-navigation/native';
import React, {type PropsWithChildren} from 'react';
import {AppNavigator} from './src/navigation/AppNavigation';
import {DataProvider} from './src/contexts/DataContext';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <DataProvider>
        <AppNavigator />
      </DataProvider>
    </NavigationContainer>
  );
};

export default App;
