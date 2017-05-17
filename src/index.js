import angular from 'angular';
const _ = require('lodash');
console.log('_')

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {chat} from './app/components/chat/chat';
import {login} from './app/components/login/login';

import AuthService from './app/services/auth.service';
import ChatService from './app/services/chat.service';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', chat)
  .component('login', login)
  .service('AuthService', AuthService)
  .service('ChatService', ChatService);
