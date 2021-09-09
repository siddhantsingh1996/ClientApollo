
import React, { useCallback, useEffect, useState } from 'react';
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from "@apollo/client";
import {ErrorLink, onError} from '@apollo/client/link/error';





const errorLink=onError(({graphQLErrors,networkError})=>{
    if(graphQLErrors){
      graphQLErrors.map(({message,location,path})=>{
        alert(`Graphql error ${message}`);
      })
    }
  })
  const link=from([
    errorLink,
    new HttpLink({uri:"http://localhost:6969/graphql"})
  ])
  
  const client=new ApolloClient({
    cache:new InMemoryCache({
      typePolicies: {
        User: {
       
          keyFields: ["firstName","lastName","email","password"],
        }
      
      }
    }),
    link:link
  })

  export default client;