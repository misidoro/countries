import { gql } from '@apollo/client';

export const COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      phone
      continent {
        name
      }
      languages {
        code
        name
      }
      emoji
    }
  }
`;
