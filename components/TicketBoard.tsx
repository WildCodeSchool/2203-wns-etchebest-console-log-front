import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import GET_ALL_TICKETS from "../lib/queries/getAllTickets";
import TicketCard, { ITicketCard } from "./TicketCard";

const cardContainerStyle = {
  height: "600px",
  overflowY: "scroll",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "0.2em",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(209 213 219)",
    outline: "0.2px solid rgb(209 213 219)",
    borderRadius: "10px",
  },
};

const cardContainerBorderStyle = {
  ...cardContainerStyle,
  borderRight: "2px solid rgb(229 231 235)",
};

const TicketBoard = () => {
  const { loading, error, data } = useQuery(GET_ALL_TICKETS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "rgb(249, 249 251)",
        padding: "30px 50px 40px",
        maxHeight: "40%",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            To Do
          </Typography>
          <Box sx={cardContainerBorderStyle}>
            {data?.tickets.map((ticket: ITicketCard) => (
              <TicketCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                description={ticket.description}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ margin: "30px 40px", fontWeight: "bold" }}
          >
            In Progress
          </Typography>
          <Box sx={cardContainerBorderStyle}></Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ margin: "30px 40px", fontWeight: "bold" }}
          >
            Done
          </Typography>
          <Grid sx={cardContainerStyle}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketBoard;
