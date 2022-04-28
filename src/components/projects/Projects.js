import { Box } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import { projects } from "./projectData";
import Project from "./Project";

const Projects = ({ matches }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: `${matches ? "1rem" : "5rem"}`,
        marginTop: "2rem",
        mb: `${matches ? "12.5rem" : "15rem"}`,
        backgroundColor: "#009688",
        borderRadius: ".5rem",
      }}
    >
      <Typography
        variant={`${matches ? "h4" : "h3"}`}
        color="#c8e6c9"
        mb="1.5rem"
        width="60%"
        mx="auto"
        borderBottom="5px solid #ff9800"
        textAlign="center"
      >
        MY PROJECTS
      </Typography>
      <Grid container spacing={5}>
        {projects &&
          projects.map((p) => (
            <Project key={p.id} 
            title={p.title}
            description={p.description}
            urlGithub={p.urlGithub}
            urlNetlify={p.urlNetlify}
            />
          ))}
      </Grid>
    </Box>
  );
};

export default Projects;
