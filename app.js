// import { GraphQLServer } from "graphql-yoga";
// ... or using `require()`
const { GraphQLServer } = require("graphql-yoga");
const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true }, () => {
  console.log("MongoDB Atlas connected!");
});

const schema = new makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new GraphQLServer({ schema });
server.start(() => console.log("Server is running on localhost:4000"));
