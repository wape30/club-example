import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';
import AppLogin from './components/AppLogin.vue';
import AdminHome from './components/AdminHome.vue';

const routes = [
  {
    name: 'DisplayItem',
    path: '/item',
    component: DisplayItem
  },
  {
    name: 'CreateItem',
    path: '/create/item',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  },
  //rutas y componenetes del login
  {
    name: 'AppLogin',
    path: '/login',
    component: AppLogin
  },

  //Rutas y componenetes del administrador
  {
    name: 'AdminHome',
    path: '/',
    component: AdminHome
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
