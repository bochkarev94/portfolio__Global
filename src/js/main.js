import cards from './modules/cards';
import slider from './modules/slider';
import map from './modules/map';
import modal from './modules/modal';
import forms from './modules/forms';
import scrollSmoothly from './modules/scroll-smoo';


window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    cards('.btn__cards_next');
    cards('.btn__cards_prev');
    slider();
    map();
    modal();
    forms();
    scrollSmoothly();
});

