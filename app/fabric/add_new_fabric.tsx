import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import * as mutations from '../../src/graphql/mutations';
import { CreateFabricInput } from '@/src/API';
import { generateClient } from 'aws-amplify/api';
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { remove } from 'aws-amplify/storage';

const client = generateClient({
  authMode: 'userPool',
});

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const AddNewFabric = ({ isOpen, handleClose }: Props) => {
  const [fileName, setFileName] = useState("")

  const processFile = async ({ file }: { file: File, key: string }) => {
    const fileExtension = file.name.split('.').pop();
    const name = Date.now().toString()
    return { file, key: `${name}.${fileExtension}` };
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const name = formJson.name;
    const desc = formJson.description;
    createFabric(name, desc);
  }

  async function createFabric(name: string, desc: string) {
    const details: CreateFabricInput = {
      name: name,
      description: desc,
      imageKey: `${fileName}`
    }

    try {
      await client.graphql({
        query: mutations.createFabric,
        variables: { input: details }
      })
      handleClose();
    } catch (err) {
      console.log(err);
      // TODO: Handle Error
    }
  }

  const onCancel = async () => {
    if (fileName != "") {
      try {
        await remove({
          path: fileName,
        });
      } catch (error) {
        console.log('Error ', error);
      }
    }
    handleClose();
  }

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
        <DialogTitle>Add new fabric</DialogTitle>
        <DialogContent >
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
          <FileUploader
            acceptedFileTypes={['image/*']}
            path="public/"
            maxFileCount={1}
            processFile={processFile}
            onUploadSuccess={({ key }) => {
              setFileName(key ?? "");
            }}
            isResumable
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddNewFabric;