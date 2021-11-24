import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useState } from 'react';

import ModalDialog from '../../components/ModalDialog'
import StylizedInput from '../../components/StylizedInput'
import { CreateUser, isLogined, Login } from '../../lib/utils';

const LoginPage: NextPage = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>)  => {
    setEmail(e.currentTarget.value);
  }

  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>)  => {
    setPassword(e.currentTarget.value);
  }

  const handleLogin = ()  => {
    if (!checkValid()) return;
    if (Login(email, password)) {
      router.push('/');
      // setAuth(true);
    }
    else {
      setMsg('Користувача не знайдено, зареєструйтесь');
    }
  }

  const checkValid = (): Boolean  => {
    if (email === ''){
      setMsg('Будь ласка заповніть емейл');
      return false
    }
    if (password === ''){
      setMsg('Будь ласка заповніть пароль');
      return false;
    }
    return true;
  }

  const handleRegistrate = ()  => {
    if (!(checkValid())) return;
    CreateUser(email, password);
  }

  return (
    <div>
      <ModalDialog isOpen={ true }>
          <StylizedInput placeholder='email' value={ email } onChange={handleChangeEmail}/>
          <StylizedInput placeholder='password' value={ password } onChange={handleChangePassword}/>
          <p>{msg}</p>
          <div>
            <button className="stylized" onClick={ handleLogin }>Log in</button>
            <button className="stylized" onClick={ handleRegistrate }>Registrate</button>
            <button className="stylized">
              <Link href='/'>
                Back
              </Link>
            </button>
          </div>
      </ModalDialog>
    </div>
  );
}

export default LoginPage
