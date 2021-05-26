import { useMutation } from "@apollo/client";
import Layout from "components/layout/layout";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAuth } from "redux/action/authAction";
import { saveToken } from "middlewares/Token";
const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(username: $name, password: $password) {
      email
      token
      id
      username
      createdAt
    }
  }
`;
export default function login() {
  const [email, setEmail] = useState();
  const [ses, setSes] = useState();
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [login, { loading, data }] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("user") != null) {
      setUser(sessionStorage.getItem("user"));
    }
  });

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("test");
    login({
      variables: {
        name: email,
        password: pass,
      },
    }).then((e) => {
      console.log(e.data.login.token);
      saveToken(e.data.login.token);
    });
  };

  if (ses) {
    if (error) {
      return <Layout title="Watch With Dpü">{error.message}</Layout>;
    }

    return (
      <Layout title="Watch With Dpü">
        <h1>Zaten {a.username} olarak giris yaptiniz </h1>
      </Layout>
    );
  }

  return (
    <Layout title="Watch With Dpü">
        <form onSubmit={submitLogin}>
          <div className="d-flex  flex-column align-items-center justify-content-around" style={{ height: 200 }}>
            <input
              type="text"
              className="p-2 rounded-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Username"
            ></input>
            <input
              type="password"
              className="p-2 rounded-3"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Password"
            ></input>
            <input
              type="submit"
              className="btn bg-color-button text-white"
              placeholder="Gonder"
              value="Gonder"
              onChange={() => dispatch(loginAuth(email, pass))}
            />
          </div>
        </form>
    </Layout>
  );
}
