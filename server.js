const express = require('express');
require('dotenv').config();
const rowdy = require('rowdy-logger');
const graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');

const app = express();
const rowdyResults = rowdy.begin(app);

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});


// MIDDLEWARE
app.use('/', express.static('/public'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

// CONTROLLERS
app.use('/members', require('./controllers/members'));

app.get('/', (req, res) => {
    res.send('Root route');
})

app.get('*', (req, res) => {
    res.status(404).send('ERROR 404: not found');
})

app.listen(process.env.PORT || 3001, () => {
    rowdyResults.print();
});