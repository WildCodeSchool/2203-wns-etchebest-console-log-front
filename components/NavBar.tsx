import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: '100vh',
          width: '150px',
          position: 'fixed',
          borderRadius: '50%',
        }}
      >
        <Tabs
          orientation='vertical'
          aria-label='Vertical tabs example'
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            height: '100vh',
          }}
        >
          <Tab sx={{ height: 100, marginTop: '10px' }} label='Item One' />
          <Tab
            sx={{ height: 100, marginTop: '130px' }}
            icon={<DashboardIcon />}
            label='Dashboard'
          />
          <Tab sx={{ height: 100 }} icon={<PeopleIcon />} label='Item Three' />
          <Tab
            sx={{ height: 100 }}
            icon={<SettingsBrightnessRoundedIcon />}
            label='Item Four'
          />
          <Tab
            sx={{ height: 100, marginTop: '320px' }}
            icon={<PowerSettingsNewIcon />}
            label='Connexion'
          />
        </Tabs>
      </Box>
    </div>
  );
}
