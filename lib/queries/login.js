import { gql } from "@apollo/client";

const LOGIN = gql`
  query Query($userLoginInput: UserLoginInput!) {
    login(UserLoginInput: $userLoginInput)
  }
`;

export default LOGIN;
