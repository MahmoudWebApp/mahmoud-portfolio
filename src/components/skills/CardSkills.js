import { Grid, Typography, Avatar, Rating, Box } from "@mui/material";
import { color_primary_black, color_secondary_black_1 } from "../../color";

const CardSkills = ({ title, imgUrl, valueRating }, matches) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box
        sx={{
          border: `1px solid ${color_primary_black}`,
          padding: `${matches ? ".1rem" : ".5rem"}`,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt={title}
          src={imgUrl}
          sx={{
            width: 56,
            height: 56,
            backgroundColor: "#fff",
          }}
        />
        <Typography
          variant={`${matches ? "subtitle1" : "h6"}`}
          color={`${color_secondary_black_1}`}
        >
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
