import type { NextPage } from 'next'
import { useState } from 'react';

import ModalDialog from '../components/ModalDialog';
import StylizedInput from '../components/StylizedInput';

const Home: NextPage = () => {
  const [mountain, setMountain] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const handleChangeBio = (e: React.FormEvent<HTMLInputElement>) => {
    setBio(e.currentTarget.value);
  }
  const handleChangeMountain = (e: React.FormEvent<HTMLSelectElement>) => {
    setOpenModal(true);
    setMountain(e.currentTarget.value);
  }
  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }
  const handleChangeDate = (e: React.FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value);
  }
  const handleSubmit = () => {
    alert('Варіанти відпочинку скоро будуть на вашому email');
    setOpenModal(false);
  }
  const handleBack = () => {
    setOpenModal(false);
  }
  const white = {
    color: 'white',
  }
  return(
    <div>
      <div className='center'>
        <h3 style={ white }>
          В які гори відправляємось?
        </h3>
        <div className="form-item stylized">
          <select name="mountains" id="mountains" onChange={ handleChangeMountain } value={ mountain }>
            <option value="Карпати">Карпати</option>
            <option value="Альпи">Альпи</option>
            <option value="Гімалаї">Гімалаї</option>
          </select>
        </div>
      </div>
      <ModalDialog isOpen={ openModal }>
        <h3 style={ white }>
          Гаразд, { mountain } чекають на тебе. Але потрібно ще трохи інформації.
        </h3>
        <StylizedInput
          placeholder='Name'
          onChange={handleChangeBio }
          value={bio}
        />
        <StylizedInput
          placeholder='email'
          onChange={handleChangeEmail }
          value={email}
        />
        <StylizedInput
          placeholder='Date'
          onChange={handleChangeDate }
          value={date}
        />
        <div className="buttons">
          <button className="stylized" type="submit" onClick={ handleSubmit }>Прийняти</button>
          <button className="stylized" type="reset" onClick={ handleBack }>Змінити вибір</button>
        </div>
      </ModalDialog>
    </div>
  );
}

export default Home
