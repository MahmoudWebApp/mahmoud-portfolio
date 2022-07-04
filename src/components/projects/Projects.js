import { Box } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import { projects } from "./projectData";
import Project from "./Project";
import {
  color_secondary_light_1,
  color_primary_light_1,
} from "../../color";
const Projects = ({ matches }) => {
  return (
    <Box
      id="projects"
      sx={{
        width: "100%",
        padding: `${matches ? "1rem" : "5rem"}`,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: `${matches ? "100%" : "70%"}`,
          padding: `${matches ? "1rem" : "5rem"}`,
          margin: "auto",
        }}
      >
        <Typography
          variant={`${matches ? "h4" : "h3"}`}
          color={` ${color_secondary_light_1}`}
          mb="1.5rem"
          width="60%"
          mx="auto"
          borderBottom={`5px solid ${color_primary_light_1}`}
          textAlign="center"
        >
          MY PROJECTS
        </Typography>
        <Grid container gap="1rem" marginTop="2rem">
          {projects &&
            projects.map((p) => (
              <Project
                key={p.id}
                title={p.title}
                description={p.description}
                urlGithub={p.urlGithub}
                urlNetlify={p.urlNetlify}
              />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
