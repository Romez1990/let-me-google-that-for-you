import React from 'react';
import style from './Logo.module.styl';

interface Props {

}

function Logo({}: Props) {
  return (
    <div className={style.googleLogo} />
  );
}

export default Logo;
