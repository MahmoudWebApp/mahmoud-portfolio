import { Grid, Typography, Avatar, Rating ,Box} from "@mui/material";

const CardSkills = ({ title, imgUrl, valueRating }) => {
  return (
    <Grid item xs={6} md={3}>
      <Box
        sx={{
          border: "1px solid #4caf50 ",
          bgcolor: "#004d40",
          padding: ".5rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={title}
          src={imgUrl}
          sx={{ width: 56, height: 56, bgcolor: "#fff" }}
        />
        <Typography variant="h6" color="#c8e6c9">
          {title}
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={valueRating}
          precision={0.5}
          readOnly
        />
      </Box>
    </Grid>
  );
};

export default CardSkills;
