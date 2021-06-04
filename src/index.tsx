import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient} from '@apollo/client/core';
import { NormalizedCacheObject } from '@apollo/client';
import { keys } from "./keys";
import { cache } from "./cache";


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({uri: keys.uri, cache});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);





