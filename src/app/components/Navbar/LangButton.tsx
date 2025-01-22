// 'use client';
import Link from 'next/link';

// import classes from './LangButton.module.scss';

// import { ChangeEvent, useState } from 'react';

const LangButton = () => {
  // const [lang, setLang] = useState<string>('ru');

  // const langHandler = (e: ChangeEvent) => {
  //   const toggle = e.target as HTMLInputElement;
  //   setLang(toggle.checked ? 'en' : 'ru');
  // };

  return (
    <>
      {/* <label htmlFor="lang-switch">RU | EN</label> */}
      {/* <input
        type="checkbox"
        name="lang-switch"
        id="lang-switch"
        onChange={langHandler}
      /> */}
      <div>
        <Link href="/ru">RU</Link>
        <Link href="/en">EN</Link>
      </div>
    </>
  );
};

export default LangButton;
