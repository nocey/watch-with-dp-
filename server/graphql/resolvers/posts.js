const { AuthenticationError, UserInputError } = require("apollo-server-errors");
const Post = require("../../models/Post"); 
const checkAuth = require('../../util/check-auth')
module.exports = {
    Query: {
        async getPosts(){
            try {
                const post = await Post.find().sort({createdAt: -1});
                return post
            }catch(err) {
                throw new Error(err); 
            }
        },
        async getPost(_ , {postID}){
            try {
                const post = await Post.findById(postID);
                if(post){
                    return post
                }else {
                    throw new Error('Post not found  '); 
                }
            }catch(err) {
                throw new Error(err); 
            }
        },
    }, 
    Mutation:{
        async createPost(_ , { body } , context) {
            const user = checkAuth(context)

            console.log(user)
            
            const newPost = new Post({
                body,
                id:user.id,
                username:user.username,
                createdAt: new Date().toISOString()
            })
            
            const post = await newPost.save()

            return post;
        },
        async deletePost(_ , { postId } , context) {
            const user = checkAuth(context);
            console.log(_)
            try {
                const post = await Post.findOne({_id: postId}).exec();
                console.log(post)
                if(post.username == user.username){
                    await post.delete();
                    return 'Succesfuly delete the post';
                }else {
                    throw new AuthenticationError('action not allowed');
                }
            }catch(err){
                throw new Error(err)
            }
        },
        async likePost(_ , {postId} , context ) {
            const user = checkAuth(context);

            const post = await Post.findById(postId);

            if(post) {
                if(post.likes.find(like=> like.username === user.username)){//if liked
                    post.likes = post.likes.filter(like => like.username !== user.username)
                }else {
                    post.likes.push({
                        username: user.username,
                        createdAt: new Date().toISOString()
                    })
                }

                await post.save();
                return post
            }else throw new UserInputError('post not find')
        }
    }
 }