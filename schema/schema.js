import {
    makeExecutableSchema
} from 'graphql-tools';
import {
    resolvers
} from '../resolvers/resolvers';
//requetty
const typeDefs = `

type Product {
  _id: ID!
  title: String!
  qty: Int
 }
 type OkrUser {
    _id: ID!
    username: String!
    password: String!
    
   }
  
type Query {
  allProducts: [Product],
  getProductById(_id: ID!): Product,
  allUsers: [OkrUser]
  loginUser(username:String!,password:String!): [OkrUser],
 }
 
 input ProductInput {
    title: String!
    qty: Int
   }

input OkrUserInput {
    username: String!
    password: String!
   }
  type Mutation {
    createProduct(input: ProductInput) : Product,
    updateProduct(_id: ID!, input: ProductInput): Product,
    deleteProduct(_id: ID!) : Product,
    createUser(input: OkrUserInput): OkrUser,
   }
`;


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;