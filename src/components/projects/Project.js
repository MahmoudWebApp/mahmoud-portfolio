import { Box } from "@mui/system";
import { Typography, Grid, Avatar, Link, Button } from "@mui/material";
import {
  color_yellow_black_2,
  color_secondary_light_2,
  color_secondary_light_1,
  color_primary_black_2,
} from "../../color";
const Project = ({ title, urlGithub, urlNetlify, description }) => {
  return (
    <Grid
      item
      xs={12}
      md={5}
      sx={{ border: `1px solid ${color_secondary_light_1}`, padding: "1rem" }}
    >
      <Typography
        variant="h5"
        color={`${color_yellow_black_2}`}
        marginBottom="1rem"
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: ".5rem",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Avatar
          alt="netlify"
          src="/image/skills/github.png"
          sx={{ bgcolor: "#fff", width: 26, height: 26 }}
        />
        <Typography variant="subtitle1" color={`${color_secondary_light_2}`}>
          source code
        </Typography>
        <Button variant="contained" color="warning" size="small">
          <Link
            href={urlGithub}
            variant="subtitle2"
            color="#fff"
            sx={{
              textDecoration: "none",
            }}
          >
            Git hup
          </Link>
        </Button>
      </Box>
      {urlNetlify === "" ? (
        <></>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            mb: "1rem",
            alignItems: "center",
          }}
        >
          <Avatar
            alt=" netlify"
            src="/image/skills/netlify.png"
            sx={{ bgcolor: "#fff", width: 26, height: 26 }}
          />
          <Typography variant="subtitle1" color={`${color_secondary_light_2}`}>
            project demo
          </Typography>
          <Button variant="contained" color="success" size="small">
            <Link
              href={urlNetlify}
              variant="subtitle2"
              color="#fff"
              sx={{
                textDecoration: "none",
              }}
            >
              Live demo
            </Link>
          </Button>
        </Box>
      )}

      <Typography
        variant="subtitle2"
        color={`${color_secondary_light_1}`}
        sx={{
          border: `1px solid ${color_secondary_light_1}`,
          padding: "0rem",
          borderRadius: ".5rem",
          backgroundColor: `${color_primary_black_2}`,
        }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default Project;
