import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export interface ITicketCard {
  title: string;
  description: string;
}

const TicketCard = ({ title, description }: ITicketCard) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "15px",
        margin: "0 25px 10px",
        "&:hover": {
          cursor: "grab",
        },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold" }}
          component="div"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "16px" }}>
          {description}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
