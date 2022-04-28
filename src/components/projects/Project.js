import { Box } from "@mui/system";
import { Typography, Grid, Avatar, Link } from "@mui/material";
const Project = ({title,urlGithub,urlNetlify,description}) => {
  return (
    <Grid item xs={12} md={6}>
          <Typography variant="h5" color="#ffd600">{title}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              mb: "1rem",
              alignItems: "center",
            }}
          >
            <Avatar
              alt=" github"
              src="/image/skills/github.png"
              sx={{ bgcolor: "#fff", width: 26, height: 26 }}
            />
            <Link href={urlGithub} variant="body2" color="#ccc">
            {urlGithub}
            </Link>
          </Box>
          {urlNetlify===""?(<></>):(<Box
            sx={{
              display: "flex",
              gap: "1rem",
              mb: "1rem",
              alignItems: "center",
            }}
          >
            <Avatar
              alt=" github"
              src="/image/skills/netlify.png"
              sx={{ bgcolor: "#fff", width: 26, height: 26 }}
            />
            <Link href={urlNetlify} variant="body2" color="#b0bec5">
              {urlNetlify}
            </Link>
          </Box>)}
          <Typography variant="subtitle1" color="#ff9800">{description}</Typography>
        </Grid>
  )
}

export default Project