import { Card, CardContent, Typography } from "@mui/material";
export interface ITicketCard {
  _id: string;
  title: string;
  description: string;
}

const TicketCard = ({ title, description }: ITicketCard) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        height: "150px",
        borderRadius: "15px",
        border: "1px solid rgb(229 231 235)",
        margin: "0 40px 15px",
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
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            whiteSpace: "nowrap",
            display: "block",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {description}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
