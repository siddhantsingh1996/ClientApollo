
import './App.css';

import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from "@apollo/client";
import GetUsers from "./Components/getuser"
import Form from "./Components/Form";

import client from './GraphQL/clinet.ts';


function App() {
  return (
   <ApolloProvider client={client}>
     {" "}
      <Form />
      { <GetUsers /> }
     
   </ApolloProvider>
  );
}

export default App;
