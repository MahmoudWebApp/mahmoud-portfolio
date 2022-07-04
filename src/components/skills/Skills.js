import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import CardSkills from "./CardSkills";
import { skills } from "./dataSkills";
import { color_primary_light_1, color_primary_black } from "../../color";

const Skills = ({ matches }) => {
  return (
    <Box
      id="skills"
      sx={{
        width: "100%",
        padding: `${matches ? "2rem" : "5rem"}`,
        textAlign: "center",
        backgroundColor: `${color_primary_light_1}`,
      }}
    >
      <Box
        sx={{
          width: `${matches ? "100%" : "70%"}`,
          padding: `${matches ? "2rem" : "5rem"}`,
          margin: "auto",
        }}
      >
        <Typography
          variant={`${matches ? "h5" : "h3"}`}
          color={`${color_primary_black}`}
          mb="1.5rem"
          width="80%"
          mx="auto"
          borderBottom={`5px solid ${color_primary_black}`}
          textAlign="center"
        >
          PROGRAMMING SKILLS
        </Typography>
        <Box mt={5}>
          <Grid container spacing={5}>
            {skills &&
              skills.map((s) => (
                <CardSkills
                  key={s.id}
                  title={s.title}
                  imgUrl={s.imgUrl}
                  valueRating={s.valueRating}
                  matches={matches}
                />
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
