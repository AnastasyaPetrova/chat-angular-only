class LoginController {

  constructor($log, $scope, $state, AuthService) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
    this.$state = $state;
    this.AuthService = AuthService;
  }

  logInfo() {
    if (!this.loginForm.$valid) {
      return;
    }
    this.AuthService.login(this.name, this.password).then(()=>{
      this.$state.go('chat');

    }).catch((err)=>{
      console.log('catch',err)

      this.error = err;
      this.$scope.$apply();
    });
  }
}

export const login = {
  bindings:{
    name:'<'
  },
  template: require('./login.html'),
  controller: LoginController
};

