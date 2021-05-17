const { UserInputError } = require('apollo-server-errors');
const Post = require('../../models/Post');
const checkAuth = require('../../util/check-auth')

module.exports = {
    Mutation: {
        createComment: async  (_ , {postId , body}, context) => {
             const user = checkAuth(context);
             if(body.trim() === ''){
                 throw new UserInputError('Empty Err' , {
                     errors: {
                         body : 'comment body must not empty'
                     }
                 })
             }

             const post = await Post.findById(postId);
             if(post){
                  post.comments.unshift({
                      body,
                      username:user.username ,
                      createdAt: new Date().toISOString() 
                  })
                  await post.save();
                  return post;
             }else throw new AuthenticationError('Post Not Found')
        },
        deleteComment: async (_ , {postId , commentId} , context) => {
            const user = checkAuth(context);
            
            const post = await Post.findById(postId)

            if(post) {
                const commentIndex = post.comments.findIndex((c)=> c.id === commentId)
                if(post.comments[commentIndex].username === user.username) {
                    post.comments.splice(commentIndex , 1);
                    await post.save();
                    return post;
                }else  {
                    throw new AuthenticationError('this post not yours')
                } 
            }else throw new AuthenticationError('Post Not Found');
        }
    }
}