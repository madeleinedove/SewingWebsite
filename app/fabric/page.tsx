"use client"

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import { CreateFabricInput, Fabric } from '@/src/API';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { getUrl } from 'aws-amplify/storage';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@mui/material';
import AddNewFabric from './add_new_fabric';

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
  };

  useEffect(() => {
    fetchFabric();
  }, [])

  // async function createFabric() {
  //   const details: CreateFabricInput = {
  //     name: "My name",
  //     description: "Desc",
  //     imageKey: ""
  //   }

  //   try {
  //     const _ = await client.graphql({
  //       query: mutations.createFabric,
  //       variables:{input:  details}
  //     })
  //   } catch (err) { console.log(err); }
  // }

  async function fetchFabric() {
    try {
      const fabricList = await client.graphql({ query: queries.listFabrics })
      const data = fabricList.data.listFabrics.items
      setFabrics(data);
    } catch (err) { console.log(err); }
  }

  async function fetchFabricImage(imagePath: any): Promise<String> {
    const getUrlResult = await getUrl({
      path: imagePath,
      options: {
        validateObjectExistence: false,
        expiresIn: 20,
        useAccelerateEndpoint: true
      },
    })
    return getUrlResult.url.toString();
  }


  return (
    <div>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={50}>
        {fabrics.map((item, index) => (
          <ImageListItem key={item.id}>
            <StorageImage alt={item.name} path={`public/${item.imageKey ?? ""}`} height={400} />
            <ImageListItemBar
              title={item.name}
              subtitle={item.imageKey}
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <AddNewFabric handleClose={handleClose} handleOpen={handleClickOpen} isOpen={open}/>
    </div>)
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    name: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    name: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    name: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    name: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    name: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    name: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    name: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    name: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    name: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    name: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    name: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    name: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
