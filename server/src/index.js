const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('../graphql/resolvers/index.js')
const mongoose = require('mongoose');
const { MONGOURL } = require('../config.js');
const typeDefs = require('../graphql/typeDefs.js')

const server = new ApolloServer({ typeDefs, resolvers , context: ({req}) => ({req}) });

mongoose.connect(MONGOURL, { useNewUrlParser: true })
    .then(() => {
        console.log(`mongodb connected`)
        return server.listen({ port: 4000 })
    }).then(res => {
        console.log(res.url)
    })
