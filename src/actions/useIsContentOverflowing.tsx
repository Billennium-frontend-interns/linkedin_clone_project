import { useState, useEffect, MutableRefObject } from 'react';

export const useIsContentOverflowing = (ref: MutableRefObject<HTMLElement>): boolean => {
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsContentOverflowing(ref.current.offsetHeight < ref.current.scrollHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isContentOverflowing;
};
