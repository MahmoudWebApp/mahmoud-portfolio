import { useState } from "react";
import { Box } from "@mui/system";
import { Typography, List, ListItem, ListItemIcon } from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  color_primary_black_1,
  color_primary_black_2,
  color_secondary_light_1,
  color_yellow_black_3,
} from "../../color";

const Footer = ({ matches }) => {
  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        backgroundColor: `${color_primary_black_2}`,
        padding: ".5rem",
        hight: "10rem",
        paddingRight: `${matches ? "1rem" : ".5rem"}`,
        paddingLeft: `${matches ? "1rem" : ".5rem"}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: `${matches ? "column" : "row"}`,
          width: "100%",
          gap: `${matches ? ".1rem" : "5rem"}`,
        }}
      >
        <Typography
          variant={`${matches ? "h6" : "h4"}`}
          sx={{
            fontFamily: "Roboto Slab",

            color: "#fff",
          }}
        >
          CONTACT ME
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroidIcon
                sx={{ color: `${color_yellow_black_3}`, fontSize: "1.5rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_light_1}`}
            >
              0933971101
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AlternateEmailIcon
                sx={{ color: `${color_yellow_black_3}`, fontSize: "1.5rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_light_1}`}
            >
              mahmoud.eng732@gmail.com
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon
                sx={{ color: `${color_yellow_black_3}`, fontSize: "1.5rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_light_1}`}
            >
              https://github.com/MahmoudWebApp
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
