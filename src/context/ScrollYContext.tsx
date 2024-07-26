import React, { useState, useCallback, useContext } from 'react';

interface ScrollYContextType {
  scrollY?: number;
  updateScrollY?: any;
}

export const scrollYContext = React.createContext<ScrollYContextType>({});

function ScrollYProvider({ children }: any) {
  const [scrollY, setScrollY] = useState<number>(0);

  const updateScrollY = useCallback(
    (beforeScrollY: number) => {
      setScrollY(beforeScrollY);
    },
    [scrollY],
  );

  const contextValue = React.useMemo(
    () => ({
      scrollY,
      updateScrollY,
    }),
    [scrollY, updateScrollY],
  );
  return <scrollYContext.Provider value={contextValue}>{children}</scrollYContext.Provider>;
}

export default ScrollYProvider;
export const ScrollYContext = () => useContext(scrollYContext);
