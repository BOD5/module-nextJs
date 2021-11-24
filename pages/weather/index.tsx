import React, { useState, FC } from 'react';
import Link from 'next/link';

import { WeatherType } from '../../lib/types';
import { getWether } from '../../lib/utils';
import ModalDialog from '../../components/ModalDialog';
import StylizedInput from '../../components/StylizedInput';

const WeatherPage: FC = () => {
  const [city, setCity] = useState<string>('Kyiv');
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);

  const handleChangeCity = (e:React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }
  const handleClick = () => {
    getWether(city)
    .then((weather) => {
      setWeatherData(weather);
    })    
    .catch(() => {
      alert("Please search for a valid city 😩");
      return null;
    });
  }
  return (
    <div>
      <ModalDialog isOpen={ true }>
        <div>
          <StylizedInput
            placeholder='City'
            onChange={handleChangeCity}
            value={city}
          />
          <button className='stylized' onClick={handleClick}>Get weather</button>
        </div>
        <p>Назва: {weatherData?.name}</p>
        <p>Температура мінімальна: {weatherData?.main.temp_min}</p>
        <p>Температура максимальна: {weatherData?.main.temp_max}</p>
        <p>Погода: {weatherData?.weather[0].main} - {weatherData?.weather[0].description}</p>
        <button className='stylized' onClick={handleClick}>
          <Link href='/'>
            close
          </Link>
        </button>
      </ModalDialog>
    </div>
  );
}
export default WeatherPage;
