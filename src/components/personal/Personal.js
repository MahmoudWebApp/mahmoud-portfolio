import { Box } from "@mui/system";
import { Typography, List, ListItem, ListItemIcon } from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import {
  color_primary_light_1,
  color_primary_black,
  color_primary_black_2,
  color_secondary_black_1,
} from "../../color";
const Personal = ({ matches }) => {
  return (
    <Box
      id="personal"
      sx={{
        width: "100%",
        padding: `${matches ? ".2rem" : "5rem"}`,
        textAlign: "center",
        backgroundColor: `${color_primary_light_1}`,
      }}
    >
      <Box
        sx={{
          width: `${matches ? "100%" : "70%"}`,
          padding: `${matches ? ".2rem" : "5rem"}`,
          margin: "auto",
        }}
      >
        <Typography
          variant={`${matches ? "h5" : "h3"}`}
          width="90%"
          color={`${color_primary_black}`}
          mb="1.5rem"
          mx="auto"
          borderBottom={`5px solid ${color_primary_black}`}
          textAlign="center"
        >
          PERSONAL INFORMATION
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <DateRangeOutlinedIcon
                sx={{ color: `${color_primary_black_2}`, fontSize: "2rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle1" : "h6"}`}
              color={`${color_secondary_black_1}`}
            >
              Date :{" "}
            </Typography>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_black_1}`}
              fontWeight="bold"
            >
              1987/01/05
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon
                sx={{ color: `${color_primary_black_2}`, fontSize: "2rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle1" : "h6"}`}
              color={`${color_secondary_black_1}`}
            >
              Address :
            </Typography>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_black_1}`}
              fontWeight="bold"
            >
              Damascus's/Jaramana
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MilitaryTechOutlinedIcon
                sx={{ color: `${color_primary_black_2}`, fontSize: "2rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle1" : "h6"}`}
              color={`${color_secondary_black_1}`}
            >
              Military Service :
            </Typography>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_black_1}`}
              fontWeight="bold"
            >
              Done
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FlagIcon
                sx={{ color: `${color_primary_black_2}`, fontSize: "2rem" }}
              />
            </ListItemIcon>
            <Typography
              variant={`${matches ? "subtitle1" : "h6"}`}
              color={`${color_secondary_black_1}`}
            >
              Nationality:
            </Typography>
            <Typography
              variant={`${matches ? "subtitle2" : "subtitle1"}`}
              color={`${color_secondary_black_1}`}
              fontWeight="bold"
            >
              Palestinian Syrian
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Personal;
