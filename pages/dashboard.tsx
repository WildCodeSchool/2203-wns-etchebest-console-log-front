import type { NextPage } from "next";
import Navbar from "../components/NavBar";
import TicketBoard from "../components/TicketBoard";
import Box from "@mui/material/Box";
import BasicModal from "../components/BasicModal";
import NavBarTest from "../components/NavBar";

const Dashboard: NextPage = () => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <NavBarTest />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <TicketBoard />
      </Box>
      <div>
        <BasicModal />
      </div>
    </Box>
  );
};

export default Dashboard;
