import "bootstrap/dist/css/bootstrap.min.css";
import "../public/main.css";
// import { createWrapper } from "next-redux-wrapper";

import { Provider as ReactProvider } from "react-redux";
import { useStore } from "../redux/store";
// import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ReactProvider store={store}>
        <Component {...pageProps} />
    </ReactProvider>
  );
}
