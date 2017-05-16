
export const main = {
  template: require('./main.html')
};

export class MainController {
  constructor($http, Auth, $stateParams) {
    this.$http = $http;
    this.auth = Auth;

  }
  // login(){
  //   console.log('----->');
  // }

  // $onInit() {
  //
  // }
}
export default angular.module('App.main', [uiRouter])
  .config(routing)
  .component('main', {

    template: require('./main.html'),
    controller: MainController
  })
  .name;
