import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import CardSkills from "./CardSkills";
import { skills } from "./dataSkills";

const Skills = ({matches}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding:`${matches?"1rem":"5rem"}`,
        marginTop: "2rem",
        backgroundColor: "#b2dfdb",
        borderRadius: ".5rem",
      }}
    >
      <Typography
        variant={`${matches?"h5":"h3"}`}
        color="#004d40"
        mb="1.5rem"
        width="80%"
        mx="auto"
        borderBottom="5px solid #4caf50"
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
              />
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
