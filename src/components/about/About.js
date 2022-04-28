import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

const About = ({matches}) => {
  return (
    <Box 
      sx={{
        width: "100%",
        padding:`${matches?"2rem":"5rem"}`,
        backgroundColor: "#00695c",
        borderRadius: ".5rem"
      }}
    >
      <Typography
        variant={`${matches?"h4":"h3"}`}
        width={`${matches?"90%":"70%"}`}
        color="#c8e6c9"
        mb="1.5rem"
        mx="auto"
        borderBottom="5px solid #4caf50"
        textAlign="center"
      >
        ABOUT ME
      </Typography>
      <Typography color="#cfd8dc" variant="h6" width={`${matches?"90%":"70%"}`} mx="auto">
        Front-End Developer with a proven ability to collaborate effectively
        with senior developers while spending extra time to be mentored. Enjoy
        working closely with team members to ensure workloads are effectively
        redirected to bottlenecks and personally picking up the slack when
        necessary
      </Typography>
      <Box sx={{display:"flex",justifyContent:"center",mt:"1.5rem"}}>
        <Button variant="contained" color="warning">Download my CV</Button>
      </Box>
    </Box>
  );
};

export default About;
