import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Example } from "./dump";

const queryClient = new QueryClient();

function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

export default MyApp;
