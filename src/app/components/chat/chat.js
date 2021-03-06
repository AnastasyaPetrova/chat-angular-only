class ChatController {
  constructor($log, $scope, $state, AuthService, ChatService) {
    'ngInject';

    this.$log = $log;
    this.$scope = $scope;
    this.$state = $state;
    this.AuthService = AuthService;
    this.ChatService = ChatService;
  }

  $onInit() {
    this.ChatService.runFakePosts();
  }

  logout(){
    this.AuthService.logout();
  }

  addNewMessage(){
    if(!this.post)return;
    this.ChatService.addNewMessage(this.post,this.user.username);
    this.post = '';
  }
}

export const chat = {
  bindings:{
    user:'<'
  },
  template: require('./chat.html'),
  controller: ChatController
};

