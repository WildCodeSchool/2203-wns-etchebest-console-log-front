import { useQuery } from "@apollo/client";
import GET_ALL_TICKETS from "../lib/queries/getAllTickets";
import TicketCard, { ITicketCard } from "./TicketCard";
import style from "../styles/TicketBoardStyles.module.css";

const TicketBoard = () => {
  const { loading, error, data } = useQuery(GET_ALL_TICKETS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className={style.container}>
      <div className={style.column}>
        <h4 className={style.title}>A faire</h4>
        <div className={style.cardContainer}>
          {data?.getAllTickets.map((ticket: ITicketCard, index: number) => (
            <TicketCard
              key={index}
              title={ticket.title}
              description={ticket.description}
            />
          ))}
        </div>
      </div>
      <div className={style.column}>
        <h4 className={style.title}>En cours</h4>
        <div className={style.cardContainer}></div>
      </div>
      <div className={style.column}>
        <h4 className={style.title}>Fait</h4>
        <div className={style.cardContainer}></div>
      </div>
    </div>
  );
};

export default TicketBoard;
