import { Box } from "@mui/system";
import { Typography, Grid, Stack, LinearProgress, Avatar } from "@mui/material";

const Education = ({matches}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding:`${matches?"1rem":"5rem"}`,
        marginTop: "2rem",
        backgroundColor: "#009688",
        borderRadius: ".5rem",
      }}
    >
      <Typography
        variant={`${matches?"h4":"h3"}`}
        color="#c8e6c9"
        mb="1.5rem"
        width="90%"
        mx="auto"
        borderBottom="5px solid #ff9800"
        textAlign="center"
      >
        EDUCATION & LANGUAGES
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant={`${matches?"h5":"h4"}`} mb={2} color="#ffd600">
            Education
          </Typography>
          <Box sx={{display:"flex",justifyContent:"space-between",gap:"1rem"}}>
          <Avatar
            alt=" Syrian virtual university"
            src="/image/svc.png"
            sx={{ border:"2px solid #ffff00", bgcolor:"#fff",width: `${matches?36:66}`, height: `${matches?36:66}` }}
          />
          <Box>
          <Typography variant="h6" color="#ff9800" mb={2}>
            Syrian virtual university
          </Typography>
          <Typography variant="subtitle1" color="#b0bec5">
            Information Engineering Student - Fourth year
          </Typography>
          </Box>
          </Box>
          
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack mb={2}>
            <Typography variant={`${matches?"h5":"h4"}`}  mb={2} color="#ffd600">
              Languages
            </Typography>
            <Typography variant="h6"  color="#ff9800" mb={2}>
              Arabic: <Typography variant="subtitle2" component="span" color="#b0bec5">Mother tongue</Typography>
            </Typography>
            <Stack>
              <Typography variant="h6" color="#ff9800" mb={2}>
                English:
              </Typography>
              <Typography
                component="legend"
                variant="subtitle2"
                color="#b0bec5"
              >
                Reading
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    color="warning"
                    variant="determinate"
                    value={90}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="subtitle2" color="#ff9800">
                    Excellent
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="legend"
                variant="subtitle1"
                color="#b0bec5"
              >
                Writing
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    color="warning"
                    variant="determinate"
                    value={80}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="subtitle2" color="#ff9800">
                    Good+
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="legend"
                variant="subtitle2"
                color="#b0bec5"
              >
                Speaking
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    color="warning"
                    variant="determinate"
                    value={80}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="subtitle2" color="#ff9800">
                    Good+
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="legend"
                variant="subtitle2"
                color="#b0bec5"
              >
                Listening
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress
                    color="warning"
                    variant="determinate"
                    value={80}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="subtitle2" color="#ff9800">
                    Good+
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
