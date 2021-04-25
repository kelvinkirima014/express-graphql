const express = require('express')
const app = express()
const { 
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql')
const { graphqlHTTP } = require('express-graphql');

app.use('/graphql',graphqlHTTP({
    graphiql: true
}))
app.listen(5000.,() => console.log('server is running'))