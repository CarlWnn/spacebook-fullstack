    /**
     * @class Responsible for storing and manipulating Spacebook posts, in-memory
     */


class PostsRepository {
    constructor() {
        this.posts = [];
    }

    addPost(postText) {
        let _this = this;

        return $.ajax ({
            method: "POST",
            url: '/posts',
            data: {text: postText, comments: []},//aller
            success: function(data) {//retour
                _this.posts.push(data);
            }
        })
            
    };

    removePost(index) {
        let _this = this;
        let postId = this.posts[index]._id;

        return $.ajax({
            type: "DELETE",
            url: '/posts/'+ postId,
            success: function(){
              _this.posts.splice(index, 1);
            }
        })
    };
        
    
    addComment(newComment, postIndex) {
        
                _this.posts[postIndex].comments.push(newComment);

    };

    deleteComment(postIndex, commentIndex) {
               _this.posts[postIndex].comments.splice(commentIndex, 1);
            
    };

    
}

export default PostsRepository

