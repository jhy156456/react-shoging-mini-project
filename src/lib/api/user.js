import { gql } from "apollo-boost";
export const loginQuery = gql`
  query loginUser($username: String!, $password: String!) {
    userCheck(username: $username, password: $password) {
      user {
        id
        username
        deliver {
          id
        }
        business {
          id
        }
      }
      access_token
    }
  }
`;