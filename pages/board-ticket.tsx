import type { NextPage } from "next";
import Layout from "../components/Layout";
import TicketBoard from "../components/TicketBoard";

const TicketsBoard: NextPage = () => {
  return (
    <Layout>
      <TicketBoard />
    </Layout>
  );
};

export default TicketsBoard;
