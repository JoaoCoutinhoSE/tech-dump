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
  const { data } = useQuery("pokemonListKey", () =>
    axios.get("https://pokeapi.co/api/v2/pokemon")
  );

  console.log(data?.data);

  return <>{data && <h1>{data}</h1>}</>;
}

export default MyApp;
