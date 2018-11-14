import React from 'react'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache }  from 'apollo-cache-persist'
import { ApolloLink, Observable } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from "apollo-link-error";
import { createNetworkStatusNotifier } from 'react-apollo-network-status';

const cache = new InMemoryCache()

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[Sherpafeet GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Sherpafeet Network error]: ${networkError}`);
});

const httpLnk = new HttpLink({
  uri: `${process.env.SF_AWS_APPSYNC_API_URL}`,
  credentials: 'same-origin',
})

const request = async (operation) => {
    operation.setContext({
      headers: {
        "x-api-key": `${process.env.SF_AWS_APPSYNC_API_KEY}`
      }
    });
};

// Apollo link for Auth
const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

// Apollo link for network status
const {
  NetworkStatusNotifier,
  link: networkStatusNotifierLink
} = createNetworkStatusNotifier();

const link = ApolloLink.from([
  networkStatusNotifierLink, requestLink, errorLink, httpLnk,
]);

const client = new ApolloClient({
  link,
  cache,
  defaultHttpLink: false,
});

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}


