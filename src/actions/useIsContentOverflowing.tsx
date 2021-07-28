import { useState, useEffect, MutableRefObject } from 'react';

export const useIsContentOverflowing = (ref: MutableRefObject<HTMLElement>) => {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsContentOverflowing(ref.current.offsetHeight < ref.current.scrollHeight);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isContentOverflowing;
};
