import { gql } from "@apollo/client";

const GET_ALL_TICKETS = gql`
  query Tickets {
    tickets {
      id
      title
      description
    }
  }
`;

export default GET_ALL_TICKETS;
