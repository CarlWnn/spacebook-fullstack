    /**
     * @class Responsible for storing and manipulating Spacebook posts, in-memory
     */


class PostsRepository {
    constructor() {
        this.posts = [];
    }

    addPost(postText) {
         _this.posts.push(data);
    };
            
    

    removePost(index) {
       _this.posts.splice(index, 1);
    };
    
    
    
    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
      };

    
}

export default PostsRepository

