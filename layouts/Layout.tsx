import React, { Fragment } from 'react';
import style from './Layout.module.styl';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import ButtonType from '../interfaces/Button';
import Button from '../components/Button';

interface Props {
  query?: string;

  onTypingComplete?(): void;

  onQueryChange(value: string): void;

  buttons: ButtonType[];
}

function Layout({ query, onQueryChange, onTypingComplete, buttons }: Props) {
  return (
    <Fragment>
      <Logo />
      <SearchBar
        query={query}
        onTypingComplete={onTypingComplete}
        onChange={onQueryChange}
      />
      <div className={style.buttonWrapper}>
        {buttons.map((button: ButtonType) => (
          <Button
            onClick={button.onClick}
            text={button.text}
            key={button.text}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default Layout;
