import { useEffect, useState } from 'react';
import { store$ } from '../store';

export const useStore = () => {
  const [store, setStore] = useState(store$.getValue());

  useEffect(() => {
    const subscription = store$.subscribe(setStore);
    return () => subscription.unsubscribe();
  }, []);

  return store;
};
