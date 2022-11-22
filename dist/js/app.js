"use strict";

import postForm from './modules/postForm';
import arrowUp from './modules/arrowUp';
import hamburger from './modules/hamb';
import checkMobile from './modules/checkMob';
import localCheckbox from './modules/localStoreCheckbox';
import viewAll from "./modules/viewAll";
import viewDetails from './modules/viewDetailsInfo';
import readMoreStore from './modules/readMoreStore';



window.addEventListener('DOMContentLoaded', () => {
    checkMobile();
    hamburger();
    arrowUp();
    postForm();
    localCheckbox();
    viewAll();
    viewDetails();
    readMoreStore();
});

