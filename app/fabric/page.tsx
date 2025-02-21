"use client"

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../src/graphql/queries';
import { Fabric } from '@/src/API';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { getUrl } from 'aws-amplify/storage';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import AddNewFabric from './add_new_fabric';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const client = generateClient({
  authMode: 'userPool',
});

export default function FabricPage() {

  const [fabrics, setFabrics] = useState<Fabric[]>([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchFabric();
  };

  useEffect(() => {
    fetchFabric();
  }, [])

  async function fetchFabric() {
    try {
      const fabricList = await client.graphql({ query: queries.listFabrics })
      const data = fabricList.data.listFabrics.items
      setFabrics(data);
    } catch (err) { console.log(err); }
  }


  return (
    <div>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={4} gap={50}>
        {fabrics.map((item) => (
          <ImageListItem key={item.id}>
            <StorageImage alt={item.name} path={`${item.imageKey ?? ""}`} height={400} />
            <ImageListItemBar
              title={item.name}
              subtitle={item.description}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Fab variant="extended" color="primary" aria-label="add" onClick={handleClickOpen} sx={{
        position: "fixed",
        bottom: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2)
      }}>
        <AddIcon sx={{ mr: 1 }} />
        Add new fabric
      </Fab>
      <AddNewFabric handleClose={handleClose} isOpen={open} />
    </div>)
}