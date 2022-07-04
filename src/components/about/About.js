import { Box } from "@mui/system";
import { Typography, Link, Button } from "@mui/material";
import {
  color_primary_light_1,
  color_secondary_light_1,
  color_secondary_light_2,
} from "../../color";

const About = ({ matches }) => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        padding: `${matches ? "2rem" : "5rem"}`,
        textAlign: "center",
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
          variant={`${matches ? "h4" : "h3"}`}
          color={` ${color_secondary_light_1}`}
          mb="1.5rem"
          mx="auto"
          borderBottom={`5px solid ${color_primary_light_1}`}
          textAlign="center"
        >
          ABOUT ME
        </Typography>
        <Typography
          color={` ${color_secondary_light_2}`}
          variant="h6"
          mx="auto"
        >
          Front-End Developer with a proven ability to collaborate effectively
          with senior developers while spending extra time to be mentored. Enjoy
          working closely with team members to ensure workloads are effectively
          redirected to bottlenecks and personally picking up the slack when
          necessary
        </Typography>
        <Button variant="contained" color="info" sx={{ marginTop: "3rem" }}>
          <Link
            sx={{
              textDecoration: "none",
              color: "#fff",
            }}
            href="https://drive.google.com/file/d/1l3mf2qa884tf1oQXw7nKNe62pSswCm9v/view?usp=sharing"
          >
            Download my CV
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default About;
