import React from 'react';
import ButtonType from '../interfaces/Button';
import style from './Button.module.styl';

interface Props extends ButtonType {}

function Button({ onClick, text }: Props) {
  return (
    <input
      type="button"
      className={style.button}
      onClick={onClick}
      value={text}
      key={text}
    />
  );
}

export default Button;
