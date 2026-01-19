import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  IconButton,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setOpen(!open)}
            sx={{ mr: 2 }}
          >
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NuLogic EHR Dashboard
          </Typography>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItemButton onClick={() => navigate("/dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/patients")}>
            <ListItemText primary="Patients" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/appointments")}>
            <ListItemText primary="Appointments" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Patients</Typography>
                <Typography variant="h4">128</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Appointments Today</Typography>
                <Typography variant="h4">24</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Doctors Available</Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
