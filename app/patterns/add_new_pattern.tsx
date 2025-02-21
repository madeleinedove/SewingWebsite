import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import * as mutations from '../../src/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { CreatePatternInput } from '@/src/API';
import PatternManufactors from './manufactors';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const client = generateClient({
  authMode: 'userPool',
});

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const AddNewPattern = ({ isOpen, handleClose }: Props) => {
  const [manufactor, setManufactor] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const name = formJson.name;
    const desc = formJson.description;
    createPattern(name, desc);
  }

  async function createPattern(name: string, desc: string) {
    const details: CreatePatternInput = {
      name: name,
      description: desc,
      manufactor: manufactor
    }

    try {
      const _ = await client.graphql({
        query: mutations.createPattern,
        variables: { input: details }
      })
      handleClose();
    } catch (err) {
      console.log(err);
      // TODO: Handle Error
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setManufactor(event.target.value);
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: onSubmit
          },
        }}
      >
        <DialogTitle>Add new Pattern</DialogTitle>
        <DialogContent >
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Pattern Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="desc"
            name="description"
            label="Pattern Desciprtion"
            fullWidth
            variant="standard"
          />
          <FormControl sx={{ marginTop: 1, minWidth: 150 }} fullWidth>
          <InputLabel>Manufactors</InputLabel>
          <Select onChange={handleChange} label="Manufactors" value={manufactor}>
            {Object.values(PatternManufactors).map((value, key) => (
              <MenuItem value={value} key={key}>{value}</MenuItem >
            ))}
          </Select></FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddNewPattern;