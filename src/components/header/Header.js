import React, { useState } from "react";
import DrawerComponent from "../DrawerComponent";
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { color_primary_black_2, color_secondary_light_2 } from "../../color";

const Header = ({ matches }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      sx={{
       
        width: "100%",
        backgroundColor: `${color_primary_black_2}`,
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1.5rem",
      }}
    >
      <Box sx={{ height: `${matches ? "3rem" : "6rem"}` }}>
        <img src="image/logo.png" alt="logo" height="100%" />
      </Box>
      <Stack>
        <Typography
          variant={`${matches ? "h5" : "h3"}`}
          color="#eceff1"
          sx={{ fontFamily: "Roboto Slab" }}
        >
          MAHMOUD AHMED
        </Typography>
        <Typography variant={`${matches ? "subtitle1" : "h6"}`} color="#90a4ae">
          Frontend Developer
        </Typography>
      </Stack>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "15px 0px",
          }}
          component="div"
        >
          {matches ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <Box sx={{ display: "flex" }}>
              <Link
                href="#about"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                About
              </Link>
              <Link
                href="#skills"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                My Projects
              </Link>
              <Link
                href="#personal"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                Personal
              </Link>
              <Link
                href="#education"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                Education
              </Link>
              <Link
                href="#footer"
                sx={{
                  marginRight: "1rem",
                  cursor: "pointer",
                  color: `${color_secondary_light_2}`,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                variant="subtitle1"
              >
                Contact me
              </Link>
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {matches ? (
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon color={`${color_secondary_light_2}`} sx={{fontSize:'2rem'}} />
              </IconButton>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
