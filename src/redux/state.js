import {reRenderTree} from '../render';

let state = {
  profilePage: {posts: 
    [
      {id: 1, message: "It's my first post :)", likesCount: 105},
      {id: 2, message: "Hello, where I am?", likesCount: 20},
      {id: 3, message: "Some dummy text to fill the post", likesCount: 5},
      {id: 4, message: "Checking the process!", likesCount: 28},
    ]
  },
  messagePage:{
    speakers: 
    [
      {id: 1, name: "Alex", ava: "http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg", message: "What's up guys?"},
      {id: 2, name: "Kate", ava: "http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg", message: "Who are you?"},
      {id: 3, name: "Phill", ava: "http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg", message: "I'm newby here."},
      {id: 4, name: "Ben", ava: "http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg", message: "Will it be anything interesting here?"},
      {id: 5, name: "Ann", ava: "http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg", message: "Hello everybody, let's start the party!"},
    ]
  }
}

export const addPost = (postText) => {
  
  let newPost = {
    id: 5,
    message: postText,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost);

  reRenderTree(state);
}

export default state;