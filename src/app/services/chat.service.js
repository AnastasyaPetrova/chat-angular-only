export default class ChatService {
  constructor($state, $interval) {
    this.$state = $state;
    this.$interval = $interval;

    this.posts = [];

    this.hardcodedPosts = require('./hardcodedPosts.json');


  }

  runFakePosts(){

    this.$interval(()=>{
      const post = this.hardcodedPosts.pop();
      post.datetime = new Date();

      this.posts.push(post);

    }, 5000, this.hardcodedPosts.length)

  }

  addNewMessage(text,username){

    let maxId = 0;

    this.posts.concat(this.hardcodedPosts).forEach((item)=>{
      if(item.id> maxId) maxId=item.id
    });

    maxId = maxId +1;


    const newMessage = { id: maxId,
      username,
      text,
      datetime: new Date()};

    this.posts.push(newMessage);
    console.log('this.messages',text,this.posts);
  }
}
