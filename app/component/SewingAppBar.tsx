'use client'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import { signOut } from 'aws-amplify/auth';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


function SewingAppBar() {
  const infoText = "Note: This information may be off or imcomplete. Please check yourself before buying anything"
  const router = useRouter();
  const pathname = usePathname()


  async function handleSignOut() {
    await signOut()
  }

  return (
    <AppBar position="static">
      <Toolbar>
        { pathname != "/" && 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push('/')}
          >
            <HomeIcon />
          </IconButton>
        }
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Madeleine&apos;s Sewing Information
        </Typography>
        <div>
          <Tooltip title={infoText}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Button color="inherit" onClick={handleSignOut}>Sign out</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default SewingAppBar;