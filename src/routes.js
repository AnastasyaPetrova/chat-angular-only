export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('chat', {
      url: '/',
      component: 'app',
      resolve: {
        guardChat: guardChat,
        user: getUser
      }
    })
    .state('login', {
      url: '/login',
      component: 'login',
      resolve: {
        name: getLastUsername,
        guardLogin: guardLogin
      }
    });
}

function guardLogin($state,AuthService){
  'ngInject'

  const user = AuthService.checkIsLoggedIn();
  if(user){
    $state.go('chat');
    return Promise.reject('Redirected to chat from login');
  }
}

function guardChat($state,AuthService) {
  'ngInject'

  const user = AuthService.checkIsLoggedIn();
  if(!user){
    $state.go('login');
    return Promise.reject('Redirected to login from chat');
  }
}

function getUser($state,AuthService,guardChat){
  'ngInject'

  const user = AuthService.getMyUserProfile();

  return user;
}

function getLastUsername(AuthService){

  const lastUsername = AuthService.getLastUsername();

  return lastUsername;
}
