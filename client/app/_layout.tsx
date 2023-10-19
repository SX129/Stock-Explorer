import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Stack } from "expo-router";

//Initializing Apollo client for local development
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  export default function App(){
    return(
        <ApolloProvider client={client}>
            <Stack screenOptions={{ headerShown: false}}/>
        </ApolloProvider>
    )
  }