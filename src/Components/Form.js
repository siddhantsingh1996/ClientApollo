import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutation";
import { useMutation } from "@apollo/client";
import {gql} from '@apollo/client';
import { useApolloClient } from '@apollo/client';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const client = useApolloClient();
  
  
  
  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }

    const READ_TODO = gql`
    query{
      getAllUsers{
        id,
        firstName,
        lastName,
        email,
        password
      }
    }
`;

// Fetch the cached to-do item with ID 5
const  todo  = client.readQuery({
  query: READ_TODO, 
});

console.log("logo",todo,client);
  };
  return (
    <div>
      
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;