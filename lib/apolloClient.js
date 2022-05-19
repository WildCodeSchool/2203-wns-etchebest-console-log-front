import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "http://localhost:4000", // e.g. https://www.myapi.com/api/v2
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
