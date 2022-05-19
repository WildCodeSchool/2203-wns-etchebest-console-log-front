import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        borderRadius: '10px',
        height: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation='vertical'
        aria-label='Vertical tabs example'
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          display: 'flex',
          height: '100%',
          paddingTop: '20px',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          S
        </Avatar>

        <Tab
          icon={<DashboardIcon />}
          sx={{
            fontSize: '10px',
            paddingTop: '130px',
          }}
          label='Dashboard'
        />

        <Tab icon={<PeopleIcon />} sx={{ fontSize: '10px' }} label='Team' />
        <Tab
          icon={<SettingsBrightnessRoundedIcon />}
          sx={{ fontSize: '10px' }}
          label='Settings'
        />
        <Tab
          icon={<PowerSettingsNewIcon />}
          sx={{ fontSize: '10px', paddingTop: '140px' }}
          label='Disconnect'
        />
      </Tabs>
    </Box>
  );
}
