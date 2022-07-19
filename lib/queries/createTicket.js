import { gql } from "@apollo/client";

const CREATE_TICKET = gql`
  mutation CreateTicket($type: String!) {
    createTicket(type: $type) {
      id
      title
      description
    }
  }
`;

export default CREATE_TICKET;
