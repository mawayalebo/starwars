import { gql } from "apollo-server-express";

const typeDefs = gql`

  type Person {
    name: String
    gender: String
    mass: String
    height: String
    homeworld: HomeWorld
  }

  type HomeWorld {
    name: String
    terrain: String
    population: String
  }

  type Query {
    peopleByPage(page: Int!): [Person],
    peopleByName(name: String!): [Person],
    HomeWorld(url: String!): HomeWorld
  }


`

module.exports = typeDefs;
