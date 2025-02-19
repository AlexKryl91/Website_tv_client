import { useEffect, useState } from 'react';

const useWidth = () => {
  const [windowWidth, setWidth] = useState<number>(0);
  const sizeHandler = () => setWidth(window.innerWidth);

  useEffect(() => {
    sizeHandler();
    window.addEventListener('resize', sizeHandler);

    return () => {
      window.removeEventListener('resize', sizeHandler);
    };
  }, []);

  return windowWidth;
};

export default useWidth;
