import React, { createRef, useEffect, useState } from 'react';
import style from './SearchBar.module.styl';
import typeToInput from '../src/typeToInput';

interface Props {
  query?: string;

  onTypingComplete?(): void;

  onChange(value: string): void;
}

function SearchBar({ query, onChange, onTypingComplete }: Props) {
  const [inputFocused, setInputFocused] = useState(false);
  const input = createRef<HTMLInputElement>();

  useEffect(() => {
    if (!input.current || !query) return;
    typeToInput(query, input.current, onChange, onTypingComplete);
  }, []);

  function inputOnChange() {
    if (input.current)
      onChange(input.current.value);
  }

  function inputOnFocus() {
    setInputFocused(true);
  }

  function inputOnBlur() {
    setInputFocused(false);
  }

  return (
    <div
      className={`${style.searchBar} ${inputFocused ? style.searchBarFocused : ''}`}>
      <div className={style.magnifier} />
      <input
        type="text"
        className={style.searchInput}
        ref={input}
        onChange={inputOnChange}
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
      />
      <div className={style.mic} />
    </div>
  );
}

export default SearchBar;
