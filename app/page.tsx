'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import './main.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json'

Amplify.configure(config);

export function Home({ signOut, user }: WithAuthenticatorProps) {
  
  const router = useRouter()
  return (
    <div>
      <main  >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}>
            <Grid size={3}>
              <Card className="item">
                <CardActionArea onClick={() => router.push('/fabric')}>
                  <CardContent>
                    Fabric
                    <CardMedia
                    >
                      {/* TODO: Make pretty */}
                      <Image src="/assets/fabricGraphic.jpg" height="200" width="200" objectFit="cover" alt="" />
                    </CardMedia>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid size={3}>
              <Card className="item" square={false} elevation={3}>
                Patterns
                <CardActionArea onClick={() => router.push('/patterns')}>
                  <CardContent>
                    <CardMedia
                    >
                      <Image src="/assets/patternsGraphic.jpg" objectFit="cover" alt="" height="200" width="200" />
                    </CardMedia>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div >
  );
}

export default withAuthenticator(Home);