import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

type Props = {
  isOpen: boolean
  handleOpen: () => void,
  handleClose:() => void
}

const AddNewFabric = ({isOpen, handleOpen, handleClose}: Props) => { 

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Add new fabric</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Fabric Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="desc"
            name="description"
            label="Fabric Desciprtion"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddNewFabric;
