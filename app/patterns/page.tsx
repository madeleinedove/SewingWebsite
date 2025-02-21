"use client"

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../src/graphql/queries';
import { Pattern } from '@/src/API';
import '@aws-amplify/ui-react/styles.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddNewPattern from './add_new_pattern';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/material';
import Container from '@mui/material/Container';


const client = generateClient({
  authMode: 'userPool',
});

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'manufactor', headerName: 'Manufactors', width: 300 },
];

const paginationModel = { page: 0, pageSize: 5 };

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     width: "100%",
//     overflowX: "auto",
//     marginBottom: theme.spacing(2),
//     margin: "auto"
//   },
//   table: {
//     width: '100%',
//   }
// }));


export default function PatternsPage() {

  const [patterns, setPatterns] = useState<Pattern[]>([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchPatterns();
  };

  useEffect(() => {
    fetchPatterns();
  }, [])

  async function fetchPatterns() {
    try {
      const patternList = await client.graphql({ query: queries.listPatterns })
      const data = patternList.data.listPatterns.items;
      setPatterns(data);
    } catch (err) { console.log(err); }
  }

  // const classes = useStyles();

  return (
    <div>
      <Container sx={{paddingTop: '50px'}}>
        <Paper sx={{ height: 'auto', width: 'auto' }} >
          <DataGrid
            rows={patterns}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5,10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Container>
      <Fab variant="extended" color="primary" aria-label="add" onClick={handleClickOpen} sx={{
        position: "fixed",
        bottom: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2)
      }}>
        <AddIcon sx={{ mr: 1 }} />
        Add new Pattern
      </Fab>
      <AddNewPattern handleClose={handleClose} isOpen={open} />
    </div>)
}