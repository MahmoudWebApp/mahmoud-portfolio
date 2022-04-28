import { Box } from "@mui/system";
import { Typography, List, ListItem, ListItemIcon } from "@mui/material";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({ matches }) => {
  return (
    <Box
      sx={{
        position:"fixed",
        lef:"0",
        bottom:"0",
        height: `${matches ? "12rem" : "15rem"}`,
        width: "100%",
        backgroundImage: "linear-gradient(to top, #004d40,#263238)",
        clipPath: `${
          matches
            ? "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0 50%, 100% 0%, 100% 100%, 0% 100%)"
        }`,
        padding: `${matches ? ".5rem" : "2rem"}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: `${matches ? "center" : "flex-end"}`,
          flexDirection:`${matches ? "column" : "row"}`,
          width: "100%",
          gap: `${matches ? ".1rem" : "5rem"}`,
        }}
      >
        <Typography
          variant={`${matches ? "h6" : "h2"}`}
          color="#eceff1"
          sx={{ fontFamily: "Roboto Slab" }}
        >
          CONTACT ME
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              < PhoneAndroidIcon
                sx={{ color: "#4caf50", fontSize: "1.5rem" }}
              />
            </ListItemIcon>
            <Typography variant="subtitle1" color="#607d8b">
              0933971101
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AlternateEmailIcon sx={{ color: "#4caf50", fontSize: "1.5rem" }} />
            </ListItemIcon>
            <Typography variant="subtitle1" color="#607d8b">
              mahmoud.eng732@gmail.com
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon
                sx={{ color: "#4caf50", fontSize: "1.5rem" }}
              />
            </ListItemIcon>
            <Typography variant="subtitle1" color="#607d8b">
            https://github.com/MahmoudWebApp
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
