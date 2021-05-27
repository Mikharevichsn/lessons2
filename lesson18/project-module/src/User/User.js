// запрос на бэкенд
// получать ответ
// если ошибка - показать ошибку

import { showError, adminData } from '../utils/common.js';

console.log('user adminData -> ', adminData);

const error = false;

if (error) {
  showError('Что-то пошло не так! ((');
}
