import { gql } from '@apollo/client';

export const GET_ALL_FLIGHTS = gql`
  query {
    rockets {
      id
      description
      name
    }
  }
`;
