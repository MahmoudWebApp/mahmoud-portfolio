import { Box } from "@mui/system";
import { Typography, Grid, Stack, LinearProgress, Avatar } from "@mui/material";
import {
  color_primary_black_2,
  color_secondary_light_1,
  color_secondary_light_2,
  color_primary_light_1,
  color_yellow_black_1,
  color_yellow_black_3,
} from "../../color";

const Education = ({ matches }) => {
  return (
    <Box
      id="education"
      sx={{
        width: "100%",
        padding: `${matches ? "1rem" : "5rem"}`,
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
          width="90%"
          mx="auto"
          borderBottom={`5px solid ${color_primary_light_1}`}
          textAlign="center"
        >
          EDUCATION & LANGUAGES
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant={`${matches ? "h5" : "h4"}`}
              mb={2}
              color={` ${color_yellow_black_3}`}
            >
              Education
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: `${matches ? "spaceAround" : "spaceBetween"}`,
                flexDirection: `${matches ? "column" : "row"}`,
                gap: "1rem",
              }}
            >
              <Avatar
                alt=" Syrian virtual university"
                src="/image/svc.png"
                sx={{
                  border: "2px solid #ffff00",
                  bgcolor: "#fff",
                  width: `${matches ? 36 : 66}`,
                  height: `${matches ? 36 : 66}`,
                }}
              />

              <Typography variant="h6" color={` ${color_secondary_light_2}`}>
                Syrian virtual university
              </Typography>
              <Typography
                variant="subtitle1"
                mt={0.5}
                color={` ${color_primary_black_2}`}
              >
                Information Engineering Student - Fourth year
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack mb={2}>
              <Typography
                variant={`${matches ? "h5" : "h4"}`}
                mb={2}
                color={` ${color_yellow_black_3}`}
              >
                Languages
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: `${matches ? "column" : "row"}`,
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  color={` ${color_secondary_light_2}`}
                  mb={2}
                >
                  ARABIC:{" "}
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color={` ${color_primary_black_2}`}
                  >
                    Mother Tongue
                  </Typography>
                </Typography>

                <Typography
                  variant="h6"
                  color={` ${color_secondary_light_2}`}
                  sx={{ alignSelf: "center" }}
                >
                  ENGLISH:
                </Typography>
                <Box
                  sx={{
                    padding: "1rem",

                    borderRadius: ".5rem",
                    border: `1px solid ${color_primary_light_1}`,

                    width: `${matches ? "90%" : "60%"}`,
                    marginTop: `${matches ? ".5rem" : "1rem"}`,
                  }}
                >
                  <Typography
                    component="legend"
                    variant="subtitle2"
                    color={` ${color_primary_black_2}`}
                    textAlign="left"
                  >
                    Reading
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "100%",
                        mr: 1,
                        color: ` ${color_yellow_black_1}`,
                      }}
                    >
                      <LinearProgress
                        color="inherit"
                        variant="determinate"
                        value={90}
                        sx={{ height: ".35rem" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color={` ${color_yellow_black_1}`}
                        bgcolor={`${color_primary_black_2}`}
                        padding=".3rem"
                        borderRadius=".5rem"
                      >
                        Excellent
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    component="legend"
                    variant="subtitle2"
                    color={` ${color_primary_black_2}`}
                    textAlign="left"
                  >
                    Writing
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "100%",
                        mr: 1,
                        color: ` ${color_yellow_black_1}`,
                      }}
                    >
                      <LinearProgress
                        color="inherit"
                        variant="determinate"
                        value={80}
                        sx={{ height: ".35rem" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color={` ${color_yellow_black_1}`}
                        bgcolor={`${color_primary_black_2}`}
                        padding=".3rem"
                        borderRadius=".5rem"
                      >
                        Good+
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    component="legend"
                    variant="subtitle2"
                    color={` ${color_primary_black_2}`}
                    textAlign="left"
                  >
                    Speaking
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "100%",
                        mr: 1,
                        color: ` ${color_yellow_black_1}`,
                      }}
                    >
                      <LinearProgress
                        color="inherit"
                        variant="determinate"
                        value={80}
                        sx={{ height: ".35rem" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color={` ${color_yellow_black_1}`}
                        bgcolor={`${color_primary_black_2}`}
                        padding=".3rem"
                        borderRadius=".5rem"
                      >
                        Good+
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    component="legend"
                    variant="subtitle2"
                    color={` ${color_primary_black_2}`}
                    textAlign="left"
                  >
                    Listening
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "100%",
                        mr: 1,
                        color: ` ${color_yellow_black_1}`,
                      }}
                    >
                      <LinearProgress
                        color="inherit"
                        variant="determinate"
                        value={80}
                        sx={{ height: ".35rem" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color={` ${color_yellow_black_1}`}
                        bgcolor={`${color_primary_black_2}`}
                        padding=".3rem"
                        borderRadius=".5rem"
                      >
                        Good+
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Education;
