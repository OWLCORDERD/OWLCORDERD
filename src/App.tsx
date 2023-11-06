import React, { useState, useCallback } from 'react';
import './App.css';
import PageRoute from 'Route/PageRoute';
import { Provider } from 'react-redux';
import { store } from './store/index';

interface menuActiveType {
  responsiveMenuActive?: boolean;
  clickMenuActive?: React.MouseEventHandler;
}

export const MenuActiveContext = React.createContext<menuActiveType>({});

function App() {
  const [responsiveMenuActive, setResponsiveMenuActive] = useState<boolean>(false);

  const clickMenuActive = useCallback(() => {
    setResponsiveMenuActive(!responsiveMenuActive);
  }, [responsiveMenuActive]);

  const contextValue = React.useMemo(
    () => ({
      responsiveMenuActive,
      clickMenuActive,
    }),
    [responsiveMenuActive, clickMenuActive],
  );
  return (
    <Provider store={store}>
      <MenuActiveContext.Provider value={contextValue}>
        <PageRoute />
      </MenuActiveContext.Provider>
    </Provider>
  );
}

export default App;
