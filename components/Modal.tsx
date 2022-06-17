import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC = () => {
  const [open, setOpen] = React.useState(false); // use state qui permet de modifier les booleans lors des ouverture et fermeture

  /*   === fonctions qui changent le useState open de true à false === */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box maxWidth="xl" sx={{ textAlign: "end" }}>
      {/*   === debut du bouton AddCircle ===  */}
      <Tooltip title="Create a new ticket">
        <IconButton sx={{ marginTop: "1em", marginRight: "0.4em" }}>
          <AddCircleIcon
            sx={{
              color: "#1AB983",
              width: "1.2em",
              height: "1.2em",
            }}
            onClick={handleOpen}
          />
        </IconButton>
      </Tooltip>
      {/*   === fin du bouton AddCircle ===  */}

      {/*   === debut  de la Modal ===  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new ticket
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-textarea"
                label="The title of the new ticket"
                placeholder="Title"
                multiline
              />
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ pt: 2, pb: 3 }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-textarea"
                label="Ticket description"
                placeholder="Description"
                multiline
                rows={4}
              />
            </Box>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              sx={{ backgroundColor: "#1AB983 !important" }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default BasicModal;
