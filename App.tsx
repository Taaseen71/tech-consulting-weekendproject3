import React from 'react';
import Navigation from 'src/navigation';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
// import store from 'src/store';
import {store} from 'src/store';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};


function App(): JSX.Element {
 
  return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <ErrorBoundary fallback={'There was an error'}>
            <NavigationContainer>
                  <Navigation />
            </NavigationContainer>
          </ErrorBoundary>
        </PaperProvider>
      </Provider>
  );
}


export default App;
