import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import Dramas from "./pages/Dramas";
import Trending from "./pages/Trending";
import Wishlist from "./pages/Wishlist";
import Review from "./pages/Review";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flex: 1,
            pt: { xs: 8, sm: 9 },
            px: { xs: 2, sm: 4 },
            maxWidth: "1200px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "200px",
                  color: "text.secondary",
                }}
              >
                Loading...
              </Box>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/dramas" element={<Dramas />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/review" element={<Review />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
