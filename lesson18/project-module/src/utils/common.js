export const sum = (a, b) => {
  return a + b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const showError = (text) => {
  alert(`Ошибка! ${text}`);
};

const admin = 'Serjo';
export const age = 25;
export const adminData = {
  login: admin,
  id: Math.round(Math.random() * 1000),
};

export default 1000;
