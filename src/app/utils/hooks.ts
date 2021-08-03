import { useEffect, useState } from 'react';

const MOBILE_MAX_WIDTH = 1200;

export interface IWindowSize {
  width: number | null;
  height: number | null;
  isMobile: boolean | null;
}

export const useWindowSize = (): IWindowSize => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: null,
    height: null,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth ?? null;
      const height = window.innerHeight ?? null;
      let isMobile = null;
      if (width !== null)
        isMobile = (width <= MOBILE_MAX_WIDTH);
      setWindowSize({
        width,
        height,
        isMobile,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
