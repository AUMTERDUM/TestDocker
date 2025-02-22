import { ApolloServer, gql } from 'apollo-server';

const users = [
    {name: "Pluem", sex : "Male",id : "62020932"},
    {name: "LUES", sex: "Male",id : "?"},
    {name: "Tae", sex: "Male",id : "?"},
    {name: "D", sex: "?",id : "?"},
    {name: "E", sex: "?",id : "?"},
  ];
//schema
const typeDefs = gql`
type Query {
    hello: String
    hi : String
    users: [User]
    user(name:String): User
 }
 type User {
    name : String
    sex : String
    id : String
  }
 `;
//resolver
const resolvers = {
    Query : {
       hello: (parent, args, context, info) => {
           return "world";
       },
       users: (parent, args, context, info) => {
         return users;
       },
       user:(parent, args, context, info) => {
         return users.find(user => user.name === args.name);
       },
    }
   };
//function apollo-server
const startApolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({ typeDefs,resolvers});
    const { url } = await server.listen();//{url} = {url......,port...}
    console.log(`Server ready at ${url}`);
};
//
//call funtion
startApolloServer(typeDefs, resolvers);
