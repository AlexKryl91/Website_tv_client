import { useEffect, useState } from 'react';

type TWidth = number;

const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState<TWidth>(0);

  function windowWidthHandler() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    windowWidthHandler();
    window.addEventListener('resize', windowWidthHandler);

    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, []);

  return windowWidth;
};

export default useWidth;
