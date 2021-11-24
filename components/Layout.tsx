import React, { FC, useState } from 'react';
import Link from 'next/link';
import CSS from 'csstype';
import Image from 'next/image';

import { isLogined, logOut } from '../lib/utils';
import Back from '../public/back.jpg';
import Header from './Header';
import MenuBtn from './MenuBtn';
import getStaticProps from  '../pages/login'

// interface  IProps { 
//   children: React.ReactNode
// }

const Layout: FC = () => {
  const [auth, setAuth] = useState(isLogined());
  const handlerLogOut = () => {
    logOut();
    setAuth(false);
  }

  return (
    <div>
      <div className='bgWrap'>
        <Image 
          layout="fill"
          objectFit="cover"
          src= { Back }
          alt=""
          width={500}
          height={500}
        />
      </div>
      <Header>
        { 
        (!auth)
        ?
          <MenuBtn>
            <Link href='/login'>
                Sign in
            </Link>
          </MenuBtn>
        :
        <div>
            <MenuBtn>
              <Link href='/weather'>
                Weather
              </Link>
            </MenuBtn>
          <MenuBtn onClick={handlerLogOut}>
            Log out
          </MenuBtn>
        </div>
        }
      </Header>
    </div>
  );
}


export default Layout;
