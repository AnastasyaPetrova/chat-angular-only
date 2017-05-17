import angular from 'angular';
import 'angular-mocks';
import {login} from './login';

describe('login component', () => {
  beforeEach(() => {
    angular
      .module('login', ['app/components//login.html'])
      .component('login', login);
    angular.mock.module('login');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<login></login>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
