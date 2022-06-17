import React, { ReactNode, useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsBrightnessRoundedIcon from "@mui/icons-material/SettingsBrightnessRounded";
import Avatar from "@mui/material/Avatar";
import Modal from "./Modal";
import TicketBoard from "../components/TicketBoard";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  value,
  ...otherProps
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...otherProps}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "20px",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        margin: 0,
      }}
    >
      <Box sx={{ padding: 0, height: "100%" }}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            alignSelf: "center",
            position: "absolute",
            left: "115px",
            top: "8%",
          }}
        >
          SB
        </Avatar>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            display: "flex",

            paddingTop: "20px",
            width: "100px",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ height: "13rem" }} tabIndex={0}></Box>
          <Tab
            icon={<DashboardIcon />}
            sx={{
              fontSize: "10px",
            }}
            label="Dashboard"
            tabIndex={1}
          />
          <Tab
            icon={<PeopleIcon />}
            sx={{ fontSize: "10px" }}
            label="Team"
            tabIndex={2}
          />
          <Tab
            icon={<SettingsBrightnessRoundedIcon />}
            sx={{ fontSize: "10px" }}
            label="Settings"
            tabIndex={3}
          />
          <Box sx={{ height: "5rem" }} tabIndex={4}></Box>

          <Tab
            icon={<PowerSettingsNewIcon />}
            sx={{
              fontSize: "10px",
              alignSelf: "flex-end",
              position: "absolute",
              bottom: "30px",
            }}
            label="Disconnect"
            tabIndex={4}
          />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <TabPanel value={value} index={1}>
          <Modal />
          <TicketBoard />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>Team</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>Setting</div>
        </TabPanel>
      </Box>
    </Box>
  );
}
