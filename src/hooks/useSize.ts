import { useEffect, useState } from 'react';

type TSize = number | null;

const useSize = () => {
  const [windowSize, setWindowSize] = useState<TSize[]>([null, null]);

  function windowSizeHandler() {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }

  useEffect(() => {
    windowSizeHandler();
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
