import { gql } from "@apollo/client";

export const GET_POKEMON_BY_ID = gql`
  query getById($nm: String!) {
    pokemon(name: $nm) {
      number
      name
      classification
      types
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      image
    }
  }
`;
