import React, { FC } from 'react';
import Image from 'next/image'

import Logo from '../public/Mountain.png';

type HeaderProps = {
  children: React.ReactNode | React.ReactChildren,
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <Image src={Logo} alt="Logo" width={140}/>
      <div className="menu">
        { children }
      </div>
    </header>
  );
}

export default Header;
