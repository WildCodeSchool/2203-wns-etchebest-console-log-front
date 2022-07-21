import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import Tab from "@mui/material/Tab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Avatar from "@mui/material/Avatar";
import SettingsBrightnessRoundedIcon from "@mui/icons-material/SettingsBrightnessRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { CssBaseline } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "130px",
      }}
    >
      {/* <Box sx={{ display: "flex" }}>
      <CssBaseline />  */}
      {/*  <Drawer variant="permanent" open={open} sx={{ width: "200px" }}> */}
      {/*  <Box> */}
      <List>
        {["Menu"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{margin: "0 0 100px"}}>
              <ListItemButton
                sx={{
                  minHeight: 30,
                  /*  justifyContent: open ? "initial" : "center", */
                  px: 2.5,
                }}
              >
                <Link href="/">
                  <Tab
                    icon={<Avatar />}
                    sx={{
                      fontSize: "10px",
                      /*    paddingBottom: "60px", */
                    }}
                    label="Profil"
                    tabIndex={0}
                  />
                </Link>
              </ListItemButton>
            </div>

            <div style={{margin: "0 0 160px"}}>
              <ListItemButton
                sx={{
                  minHeight: 30,
                  /* justifyContent: open ? "initial" : "center", */
                  px: 2.5,
                }}
              >
                <Link href="/dashboard">
                  <Tab
                    icon={<DashboardIcon />}
                    sx={{
                      fontSize: "10px",
                      /*  paddingBottom: "60px",  */
                    }}
                    label="Dashboard"
                    tabIndex={1}
                  />
                </Link>
              </ListItemButton>

              <ListItemButton
                sx={{
                  minHeight: 30,
                  /* justifyContent: open ? "initial" : "center", */
                  px: 2.5,
                }}
              >
                <Link href="/team">
                  <Tab
                    icon={<PeopleIcon />}
                    sx={{
                      fontSize: "10px",
                      /*       paddingBottom: "60px", */
                    }}
                    label="Team"
                    tabIndex={2}
                  />
                </Link>
              </ListItemButton>

              <ListItemButton
                sx={{
                  minHeight: 30,
                  /* justifyContent: open ? "initial" : "center", */
                  px: 2.5,
                }}
              >
                <Link href="/settings">
                  <Tab
                    icon={<SettingsBrightnessRoundedIcon />}
                    sx={{
                      fontSize: "10px",
                      /* paddingBottom: "60px", */
                    }}
                    label="Settings"
                    tabIndex={3}
                  />
                </Link>
              </ListItemButton>
            </div>
            <div>
              <ListItemButton
                sx={{
                  minHeight: 30,
                  /*  justifyContent: open ? "initial" : "center", */
                  px: 2.5,
                }}
              >
                <Link href="/">
                  <Tab
                    icon={<PowerSettingsNewIcon />}
                    sx={{
                      fontSize: "10px",
                      /* paddingBottom: "60px", */
                    }}
                    label="Disconnect"
                    tabIndex={4}
                  />
                </Link>
              </ListItemButton>
            </div>
          </ListItem>
        ))}
      </List>
      {/*  </Box> */}
      {/*     </Drawer> */}
    </div>
    /*    </Box> */
  );
}
