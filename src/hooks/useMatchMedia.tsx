import { useEffect, useState } from 'react';

export const useMatchMedia = (mediaQuery:string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    let mql = window.matchMedia(mediaQuery);

    if (mql.matches) {
      setMatches(true);
    }
  }, []);

  return {matches};
};
