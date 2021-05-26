const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const usersGetResolvers = require('./getUser');
const commentsResolvers = require('./comments');

module.exports = {
  Query: {
    ...postsResolvers.Query,
    ...usersGetResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
};