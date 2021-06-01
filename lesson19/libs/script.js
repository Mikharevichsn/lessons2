import flatpickr from 'flatpickr';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import './style.css';

flatpickr('#my-id', {
  dateFormat: 'd-m-Y',
  minDate: '01-03-2021',
  maxDate: '31-05-2021',
  onOpen: () => {
    console.log('opened');
  },
});

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
