import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleListener = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        handler();
      }
    };
    document.addEventListener('mousedown', handleListener);

    return () => {
      document.removeEventListener('mousedown', handleListener);
    };
  });

  return ref;
};
