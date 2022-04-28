import { Header, About,Personal ,Education,Skills ,Projects,Footer} from "./components";
import  {Container,useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';


const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="app">
      <Header matches={matches} />
      <Container
        sx={{
          width:`${matches?"96%":"60%"}`,
          paddingTop:`${matches?".5rem":"2rem"}`,
          marginTop:`${matches?"2rem":"5rem"}`,
          backgroundColor:`${matches?"transparent":"#eceff1"}`
        }}
      >
        <About matches={matches} />
        <Personal matches={matches}/>
        <Education matches={matches}/>
        <Skills matches={matches}/>
        <Projects matches={matches}/>
      </Container>
      <Footer matches={matches}/>
    </div>
  );
};

export default App;
