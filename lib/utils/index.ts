import { UserType } from "../types";

const Login = (email: string, pass: string) => {
  console.log(' - localStorage.getItem():5 >', localStorage.getItem('users')); // eslint-disable-line no-console
  if (!localStorage.getItem('users')){
    return false;
  }
  const users = JSON.parse(localStorage.getItem('users') as string) as Array<UserType>;
  const userId = users.findIndex((u) => u.email === email && u.password === pass);
  if (userId !== -1) 
    localStorage.setItem('logined', JSON.stringify(true));
  return (userId !== -1)
};

const logOut = () => {
  localStorage.removeItem('logined');
}

const isLogined = () => {
  if (typeof window === 'undefined' || !localStorage.getItem('logined')){
    return false;
  }
  return true;
}

const CreateUser = (email: string, password: string) => {
  let users: Array<UserType> = [];
  if (localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users') as string);
  }
  users.push({email, password});
  localStorage.setItem('users', JSON.stringify(users));
};


const API_key = '03fbe473b1ee6e2d5e29dc627bb32625';

const getWether = async (city: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
  return fetch(url)
  .then(response => response.json())
}

export {Login, CreateUser, getWether, logOut, isLogined};
