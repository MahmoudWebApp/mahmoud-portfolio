import { Box } from "@mui/system";
import { Typography ,List,ListItem, ListItemIcon} from "@mui/material";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import FlagIcon from '@mui/icons-material/Flag';
const Personal = ({matches}) => {
  return (
    <Box
      sx={{
        padding:`${matches?"1rem":"5rem"}`,
        width: "100%",
        borderRadius: ".5rem",
        marginTop: "2rem",
        backgroundColor: "#b2dfdb",
      }}
    >
      <Typography
        variant={`${matches?"h5":"h3"}`}
        width="90%"
        color="#004d40"
        mb="1.5rem"
        mx="auto"
        borderBottom="5px solid #4caf50"
        textAlign="center"
      >
        PERSONAL INFORMATION
      </Typography>
     <List>
         <ListItem>
             <ListItemIcon><DateRangeOutlinedIcon sx={{color:"#4caf50",fontSize:"2rem"}}/></ListItemIcon>
             <Typography variant="h6" color="#607d8b">Date : 1987/01/05</Typography>
         </ListItem>
         <ListItem>
             <ListItemIcon><HomeOutlinedIcon sx={{color:"#4caf50",fontSize:"2rem"}} /></ListItemIcon>
             <Typography variant="h6" color="#607d8b">Address : Damascus's/Jaramana</Typography>
         </ListItem>
         <ListItem>
             <ListItemIcon><MilitaryTechOutlinedIcon sx={{color:"#4caf50",fontSize:"2rem"}}/></ListItemIcon>
             <Typography variant="h6" color="#607d8b">Military Service : Done</Typography>
         </ListItem>
         <ListItem>
             <ListItemIcon><FlagIcon sx={{color:"#4caf50",fontSize:"2rem"}}/></ListItemIcon>
             <Typography variant="h6" color="#607d8b">Nationality: Palestinian Syrian</Typography>
         </ListItem>
     </List>
    </Box>
  );
};

export default Personal;
