import { gql } from "@apollo/client";

const GET_ALL_TICKETS = gql`
  query GetAllTickets {
    getAllTickets {
      _id
      title
      description
    }
  }
`;

export default GET_ALL_TICKETS;
