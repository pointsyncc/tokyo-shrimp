import { useEffect, useState } from 'react';

export const useInit = (callback: (...args: any) => void, ...args: any) => {
  const [mounted, setMounted] = useState(false);

  const resetInit = () => setMounted(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback(...args);
    }
  }, [mounted, callback, args]);

  return [resetInit];
};
