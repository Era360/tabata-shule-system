import {
  Campaign,
  ChevronLeft,
  ChevronRight,
  Groups,
  Home,
  Money,
  Notifications,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Badge,
  Box,
  Container,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  ThemeProvider,
  Typography,
  useTheme,
  Alert,
  Fade,
  Menu,
  MenuItem,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { elct } from "../images";
import Matangazo from "./sidebars/matangazo";
import Matoleo from "./sidebars/matoleo";
import Nyumbani from "./sidebars/Nyumbani";
import Waumini from "./sidebars/waumini";

let drawerWidth = 265;

function Dashboard() {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [currently, setCurrently] = useState("nyumbani");
  const [nots, setNots] = useState(null);
  const nots_open = Boolean(nots);
  const { currentUser } = useAuth();
  let navigate = useNavigate();
  const theme = useTheme();

  async function handleLogout() {
    setError("");
    try {
      await signOut(auth);
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNotsClick = (e) => {
    setNots(e.currentTarget);
  };

  const apptheme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5", // "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      padding: theme.spacing(2),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      width: "100%",
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: drawerWidth,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Container>
      <ThemeProvider theme={apptheme}>
        <Box sx={{ display: "flex" }}>
          {/* <CssBaseline /> */}
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              {/* <Typography variant="h6" noWrap component="div">
                Persistent drawer
              </Typography> */}
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                aria-haspopup="true"
                aria-expanded={nots_open ? "true" : undefined}
                onClick={handleNotsClick}
              >
                <Badge badgeContent={3} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <Menu
                anchorEl={nots}
                // sx={{
                //   transform: "translate(-2%, -10%)",
                // }}
                open={nots_open}
                onClose={() => setNots(null)}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                TransitionComponent={Fade}
              >
                <MenuItem>Notification 1</MenuItem>
                <MenuItem>Notification 2</MenuItem>
                <MenuItem>Notification 3</MenuItem>
              </Menu>
              <IconButton onClick={handleLogout}>
                <Avatar src={elct} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <Avatar src={elct} />
              <Typography className="fw-bold">KKKT Tabata Shule</Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem
                button
                onClick={() => {
                  setCurrently("nyumbani");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Nyumbani"} />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setCurrently("waumini");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary={"Waumini"} />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setCurrently("matoleo");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Money />
                </ListItemIcon>
                <ListItemText primary={"Matoleo"} />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setCurrently("matangazo");
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <Campaign />
                </ListItemIcon>
                <ListItemText primary={"Matangazo"} />
              </ListItem>
              {/* {["Nyumbani", "Waumini", "Matoleo", "Matangazo"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <Inbox /> : <Mail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )} */}
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {error && (
              <Alert severity="error" sx={{ width: "100%" }}>
                {error}
              </Alert>
            )}
            {
              {
                nyumbani: <Nyumbani curruser={currentUser.email} />,
                waumini: <Waumini />,
                matoleo: <Matoleo />,
                matangazo: <Matangazo />,
              }[currently]
            }
          </Main>
        </Box>
      </ThemeProvider>
    </Container>
  );
}

export default Dashboard;
