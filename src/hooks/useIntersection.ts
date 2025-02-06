import { useEffect, useRef, useState } from 'react';

const useItersection = (rootMargin: number) => {
  const margin = `${rootMargin}px`;
  const options = { root: null, rootMargin: margin };

  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current as Element);

    return () => {
      observer.disconnect();
    };
  });

  return [ref, isIntersecting];
};

export default useItersection;
