import "../styles/globals.css";
import { QueryClient, useQuery, QueryClientProvider } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const pokemonsList = useQuery(
    "pokemonListKey",
    axios.create({ method: "get", url: "https://pokeapi.co/api/v2/" })
  );

  console.log(pokemonsList);

  return <h1>hello world</h1>;
}

export default MyApp;
