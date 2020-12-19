import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "react-apollo";
import Apolloclient from "apollo-boost";
import {BrowserRouter} from 'react-router-dom'
const client = new Apolloclient({
  uri: "http://13.124.188.131:8000/graphql",
  request:operation=>{
    console.log(sessionStorage.getItem("access_token"))
    operation.setContext(context=>({
      headers:{
        ...context.headers,
        Authorization:sessionStorage.getItem("access_token")
      }
    }))
  }
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
