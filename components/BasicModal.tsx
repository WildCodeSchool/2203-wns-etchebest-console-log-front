import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import CREATE_ONE_TICKET from "../lib/queries/createOneTicket";
import { useMutation } from "@apollo/client";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  /*  border: "2px solid #000", */
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false); // use state qui permet de modifier les booleans lors des ouverture et fermeture
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [createOneTicket, { data, loading, error }] =
    useMutation(CREATE_ONE_TICKET);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createOneTicket({
      variables: { data: { title: title, description: description } },
    });
    setTitle("");
    setDescription("");
    handleClose();
  };
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <Box maxWidth="xl" sx={{ textAlign: "end" }}>
      {/*   === debut du bouton create ticket ===  */}
      <Tooltip title="Create a new ticket">
        <Button
          onClick={handleOpen}
          sx={{
            backgroundColor: "#1AB983 !important",
            mt: 3,
            color: "white",
            mr: 3,
          }}
        >
          Create ticket
        </Button>
      </Tooltip>
      {/*   === fin du bouton create ticket ===  */}

      {/*   === debut  de la Modal ===  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ ml: 1, mb: 2}}
          >
            Create a new ticket
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              style,
            }}
            noValidate
            autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                id="title"
                label="Title"
                multiline
                maxRows={4}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "#1AB983 !important",
                  mt: 3,
                }}
                onClick={handleSubmit}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default BasicModal;
