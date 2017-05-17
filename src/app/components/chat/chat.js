class ChatController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const chat = {
  template: require('./chat.html'),
  controller: ChatController
};

