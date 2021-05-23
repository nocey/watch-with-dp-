const { gql } = require("apollo-server");

module.exports = gql`
type Like{
  id:ID!
  username:String!
  createdAt:String! 
}

type Comment{
  id:ID!
  body:String!
  createdAt: String!
  username: String!
}

type Post{
  id: ID!
  body: String!
  createdAt: String!
  username: String!
  comments: [Comment]!
  likes: [Like]!
}


type Query{
  getPosts: [Post]
  getPost(postID: ID!):Post 
}

type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  
type Mutation {
  register(registerInput: RegisterInput): User!
  login(username: String! , password: String!): User!
  createPost(body:String!):Post!
  deletePost(postId:String!): String!
  createComment(postId:ID! , body:String!):Post!
  deleteComment(postId:ID! , commentId:ID!):Post!
  likePost(postId:ID!):Post!
}
`;