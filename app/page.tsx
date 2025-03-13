'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import './main.css'
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Typography } from '@mui/material';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json'
import DescriptionIcon from '@mui/icons-material/Description';
import TextureIcon from '@mui/icons-material/Texture';
import ConstructionIcon from '@mui/icons-material/Construction';

Amplify.configure(config);

export function Home() {

  const router = useRouter()
  return (
    <div>
      <main  >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ minHeight: '100vh', paddingTop: '50px' }}>
            <Grid size={2}>
              <CardActionArea onClick={() => router.push('/fabric')}>

                <Card className="item">
                  <Typography variant='h5'>
                    Fabric
                  </Typography>
                  <CardContent>
                    List of all fabrics and the ability to add new fabrics
                    <br />
                    <DescriptionIcon fontSize='large' />
                  </CardContent>
                </Card>
              </CardActionArea>

            </Grid>
            <Grid size={2}>
              <CardActionArea onClick={() => router.push('/patterns')}>
                <Card className="item" square={false} elevation={3}>
                  <Typography variant='h5'>
                    Patterns
                  </Typography>
                  <CardContent>
                    List of all patterns and the ability to add new patterns
                    <br />
                    <TextureIcon fontSize='large' />
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
            <Grid size={2}>
              <CardActionArea onClick={() => router.push('/patternFinder')}>
                <Card className="item" square={false} elevation={3}>
                  <Typography variant='h5'>
                    Coming soon
                  </Typography>
                  <CardContent>
                    An exciting new feature coming 2025
                    <br />
                    <ConstructionIcon fontSize='large' />
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div >
  );
}

export default withAuthenticator(Home);