import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';

function SewingAppBar() {
  const infoText = "Note: This information may be off or imcomplete. Please check yourself before buying anything"

  return (
    <AppBar position="static">
      <Toolbar>
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default SewingAppBar;