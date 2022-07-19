import { gql } from "@apollo/client";

const CREATE_ONE_TICKET = gql`
  mutation CreateOneTicket($data: TicketCreateInput!) {
    createOneTicket(data: $data) {
      id
      title
      description
    }
  }
`;

export default CREATE_ONE_TICKET;
