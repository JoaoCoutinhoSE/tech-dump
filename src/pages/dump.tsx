import React from "react";
import { useQuery } from "react-query";
import api from "../services/api";

export function Example() {
  const { data } = useQuery("pokemonListKey", () => api.get("pokemon/ditto"));

  console.log(data?.data);

  return <>{data && <h1>{data}</h1>}</>;
}
