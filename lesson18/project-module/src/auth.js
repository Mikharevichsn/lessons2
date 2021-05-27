export const login = (login, password) => {
  if (login === 'admin' && password === 'admin') return true;
  return false;
};

export const logout = () => {
  return true;
};

export const incrementLikes = (likes) => {
  return likes + 1;
};

const getLogin = () => {
  const login = prompt('введите логин');
  const password = prompt('введите пароль');
  return { login, password };
};

export default getLogin;
