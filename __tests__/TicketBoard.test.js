import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import GET_ALL_TICKETS from "../lib/queries/getAllTickets";
import TicketBoard from "../components/TicketBoard";

test("loading", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <TicketBoard />
    </MockedProvider>
  );
  expect(screen.queryByText(/Loading.../i)).toBeInTheDocument();
});

test("fetch data", async () => {
  render(
    <MockedProvider
      mocks={[
        {
          request: {
            query: GET_ALL_TICKETS,
          },
          result: {
            data: {
              tickets: [
                {
                  id: "tjjtskjtjsjtst",
                  title: "Test",
                  description: "Ceci est un test;",
                },
              ],
            },
          },
        },
      ]}
      addTypename={false}
    >
      <TicketBoard />
    </MockedProvider>
  );

  const element = await waitFor(() => screen.getByText("Test"));
  expect(element).toBeInTheDocument();
});

test("error", async () => {
  render(
    <MockedProvider
      mocks={[
        {
          request: {
            query: GET_ALL_TICKETS,
          },
          result: {
            errors: [new Error("Error!")],
          },
        },
      ]}
      addTypename={false}
    >
      <TicketBoard />
    </MockedProvider>
  );

  const element = await waitFor(() => screen.getByText(/Error.../i));
  expect(element).toBeInTheDocument();
});
