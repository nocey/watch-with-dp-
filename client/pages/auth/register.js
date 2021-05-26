import { useMutation } from "@apollo/client";
import Layout from "components/layout/layout";
import gql from "graphql-tag";
import { saveToken } from "middlewares/Token";
import React, { useState } from "react";

const REGISTER = gql`
  mutation register(
    $username: String!
    $pass: String!
    $comfirmPass: String!
    $email: String!
  ) {
    register(
      registerInput:{
        username: $username
        confirmPassword: $comfirmPass
        password: $pass
        email: $email
      }
    ) {
      id
      email
      token
      username
      createdAt
    }
  }
`;

export default function register() {
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [register, { loading, data }] = useMutation(REGISTER);
  const [username, setUsername] = useState();

  const submitRegister = (e) => {
    e.preventDefault();
    register({
      variables: {
        username: username,
        comfirmPass:confirmPass,
        email : email,
        pass: pass,
      },
    }).then((e) => {
      console.log(e);
      saveToken(e.data.register.token);
    });
  };

  return (
    <Layout title="Watch With Dpü">
      <form onSubmit={submitRegister}>
        <div
          className="d-flex flex-column align-items-center justify-content-around"
          style={{ height: 200 }}
        >
          <input
            type="text"
            className="p-2 rounded-3"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="e-mail"
          />
          <input
            type="text"
            className="p-2 rounded-3"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          />
          <input
            type="password"
            className="p-2 rounded-3"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="password"
          />
          <input
            type="password"
            className="p-2 rounded-3"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            placeholder="confirm Password"
          />
          <input
            type="submit"
            className="btn bg-color-button text-white"
            placeholder="Gonder"
            value="Gonder"
          />
        </div>
      </form>
    </Layout>
  );
}
