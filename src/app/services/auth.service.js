export default class AuthService {
  constructor($state) {
    this.$state = $state;
    this.users = [{
      id:1,
      username:'Vasya',
      password:'12345',
    },{ id:2,
      username:'Petya',
      password:'54321'
      }
    ];

  }
  login(username,password){
    const user = _.find(this.users, (user) => {
      return user.username === username;
    });

    if(!user) return Promise.reject('User not found');
    if(user.password === password){
      window.localStorage.setItem("isLoggedIn", username);
      window.localStorage.setItem("lastUsername", username);
      return Promise.resolve(user);
    }
    return Promise.reject('Password is incorrect');

  }

  logout(){
    window.localStorage.removeItem("isLoggedIn");
    this.$state.go('login');
  }

  checkIsLoggedIn(){
    return window.localStorage.getItem("isLoggedIn");
  }

  getLastUsername(){
    return window.localStorage.getItem("lastUsername");
  }

  getMyUserProfile(){
    const username = window.localStorage.getItem("isLoggedIn");
    const user = _.find(this.users, (user) => {
      return user.username === username;
    });
    return user;
  }
}
