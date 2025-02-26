'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@store/store';
import { TLangSet } from '@/types/types';
import { setLang } from '@store/features/language/langSlice';

type TStoreProvider = {
  children: React.ReactNode;
  lang: TLangSet;
};

export default function StoreProvider({ children, lang }: TStoreProvider) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setLang(lang));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
