import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "secondary.main", display: "flex" }}
    >
      <Container maxWidth="100%">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "80px",
            position: "relative",
            px: 4,
          }}
        >
          {/* Left side - Logo */}
          <Box sx={{ position: "absolute", left: 0 }}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                fontSize: "1.8rem",
              }}
            >
              🎬 MovieHub
            </Typography>
          </Box>

          {/* Center - Navigation Links */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/movies"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Movies
            </Button>
            <Button
              component={Link}
              to="/dramas"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Dramas
            </Button>
            <Button
              component={Link}
              to="/trending"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Trending
            </Button>
            <Button
              component={Link}
              to="/wishlist"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Wishlist
            </Button>
            <Button
              component={Link}
              to="/review"
              color="inherit"
              sx={{
                fontSize: "1.1rem",
                "&:hover": { color: "primary.main" },
              }}
            >
              Review
            </Button>
          </Box>

          {/* Right side - Auth Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              position: "absolute",
              right: 0,
            }}
          >
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                fontSize: "1.1rem",
                px: 3,
                borderColor: "primary.main",
                "&:hover": {
                  borderColor: "primary.light",
                  backgroundColor: "primary.main",
                },
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontSize: "1.1rem",
                px: 3,
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
