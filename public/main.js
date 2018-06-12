import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();


var requestGetRoute = function () {
    $.ajax( {
      method: "GET",
      url: '/posts', // request the new Get server route called /posts
      success: function(data) {
        postsRepository.posts= data; 
        postsRenderer.renderPosts(postsRepository.posts);
      },
      error: function(error) {
        console.log('Error: ' + error);
      }
    });
  }
  
requestGetRoute();