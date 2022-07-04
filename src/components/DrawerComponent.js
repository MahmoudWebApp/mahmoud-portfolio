import React from "react";
import { Drawer, List, ListItem, Link } from "@mui/material";
import { color_primary_black ,color_secondary_light_2} from "../color";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List
        sx={{
          backgroundColor: `${color_primary_black}`,
          height: "100%",
          padding: "5rem",
          color: "#fff",
        }}
      >
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <Link
            href="#about"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            About
          </Link>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
        <Link
            href="#skills"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Skills
          </Link>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
        <Link
            href="#projects"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Projects
          </Link>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
        <Link
            href="#personal"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Personal
          </Link>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
        <Link
            href="#education"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Education
          </Link>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
        <Link
            href="#footer"
            sx={{
              marginRight: "1rem",
              cursor: "pointer",
              color: `${color_secondary_light_2}`,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            variant="h6"
          >
            Contact Me
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default DrawerComponent;
