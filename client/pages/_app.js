import "bootstrap/dist/css/bootstrap.min.css";
import "../public/main.css";
import "../public/reset.css";
// import { createWrapper } from "next-redux-wrapper";

import { Provider as ReactProvider } from "react-redux";
import { useStore } from "../redux/store";
// import { Provider } from "next-auth/client";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client/react';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {

  const token = sessionStorage.getItem('user');
  
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ApolloProvider client={client}>
      <ReactProvider store={store}>
        <Component {...pageProps} />
      </ReactProvider>
    </ApolloProvider>
  );
}
