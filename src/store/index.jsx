import { BehaviorSubject } from 'rxjs';

const initialState = {
  theme: 'light'
};

const store$ = new BehaviorSubject(initialState);

const getStore = () => store$.getValue();

const setStore = (partial) => {
  store$.next({
    ...getStore(),
    ...partial
  });
};
const toggleTheme = () => {
  const newTheme = getStore().theme === 'light' ? 'dark' : 'light';
  setStore({ theme: newTheme });
};
export {
  store$,
  getStore,
  toggleTheme
};
