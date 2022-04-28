import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";

const Header = ({matches}) => {
  return (
    <Box
      sx={{
        height: `${matches?"10rem":"15rem"}`,
        width: "100%",
        backgroundImage: "linear-gradient(to bottom, #004d40,#263238)",
        clipPath: `${matches?"polygon(0 0, 100% 0%, 100% 100%, 0% 100%)":"polygon(0 0, 100% 0%, 100% 50%, 0% 100%)"}`,
        padding: `${matches?".5rem":"1rem"}`,
        display:"flex",
        alignItems:"center",
        gap:"2rem"
      }}
    >
        <Box sx={{ height:`${matches?"6rem":"10rem"}` }}>
        <img src="image/logo.png" alt="logo"  height="100%"/>
        </Box>
      <Stack>
        <Typography
          variant={`${matches?"h4":"h2"}`}
          color="#eceff1"
          sx={{fontFamily:"Roboto Slab"}}
        >
          MAHMOUD AHMED
        </Typography>
        <Typography variant={`${matches?"h6":"h5"}`} color="#90a4ae">Frontend Developer</Typography>
      </Stack>
    </Box>
  );
};

export default Header;
