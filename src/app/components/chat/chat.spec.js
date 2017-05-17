import angular from 'angular';
import 'angular-mocks';
import {chat} from './chat';

describe('chat component', () => {
  beforeEach(() => {
    angular
      .module('chat', ['app/components/chat/chat.html'])
      .component('chat', chat);
    angular.mock.module('chat');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<chat></chat>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
