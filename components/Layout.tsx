import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CDEEDA",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Paper
        elevation={2}
        sx={{ width: "90%", height: "90%", borderRadius: "20px" }}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export default Layout;
