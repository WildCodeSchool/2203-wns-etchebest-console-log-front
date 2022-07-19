import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
    <div>
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
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
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
              maxRows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            {/*           <Stack direction="row" spacing={2}> */}
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ backgroundColor: "#1AB983 !important", mt: 3 }}
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
          {/*     </Stack> */}
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import Stack from "@mui/material/Stack";
// import CREATE_TICKET from "../lib/queries/createTicket";
// import { useMutation } from "@apollo/client";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const BasicModal: React.FC = () => {
//   const [open, setOpen] = React.useState(false); // use state qui permet de modifier les booleans lors des ouverture et fermeture
//   /*   === fonctions qui changent le useState open de true à false === */
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [createTicket, { data, loading, error }] = useMutation(CREATE_TICKET);
//   let input: any;
//   if (loading) return "Submitting...";
//   if (error) return `Submission error! ${error.message}`;

//   return (
//     <Box maxWidth="xl" sx={{ textAlign: "end" }}>
//       {/*   === debut du bouton AddCircle ===  */}
//       <Tooltip title="Create a new ticket">
//         <IconButton sx={{ marginTop: "1em", marginRight: "0.4em" }}>
//           <AddCircleIcon
//             sx={{
//               color: "#1AB983",
//               width: "1.2em",
//               height: "1.2em",
//             }}
//             onClick={handleOpen}
//           />
//         </IconButton>
//       </Tooltip>
//       {/*   === fin du bouton AddCircle ===  */}

//       {/*   === debut  de la Modal ===  */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//       >
//         <Box>
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//               Create a new ticket
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& .MuiTextField-root": { width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//               >
//                 <TextField
//                   id="outlined-textarea"
//                   label="The title of the new ticket"
//                   placeholder="Title"
//                   multiline
//                 />
//               </Box>
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ pt: 2, pb: 3 }}>
//               <Box
//                 component="form"
//                 sx={{
//                   "& .MuiTextField-root": { width: "100%" },
//                 }}
//                 noValidate
//                 autoComplete="off"
//                 onSubmit={async (e: any) => {
//                   e.preventDefault();
//                   await createTicket({
//                     variables: { type: input.description },
//                   });
//                   input.value = "description";
//                 }}
//                 ref={(node) => {
//                   input = node;
//                 }}
//               >
//                 <TextField
//                   id="outlined-textarea"
//                   label="Ticket description"
//                   placeholder="Description"
//                   multiline
//                   rows={4}
//                 />

//                 <Stack direction="row" spacing={2}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="success"
//                     sx={{ backgroundColor: "#1AB983 !important", mt: 3 }}
//                   >
//                     Add
//                   </Button>
//                 </Stack>
//               </Box>
//             </Typography>
//             <Stack direction="row" spacing={2}>
//             </Stack>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default BasicModal;
