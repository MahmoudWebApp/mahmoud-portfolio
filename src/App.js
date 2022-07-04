import {
  Header,
  About,
  Personal,
  Education,
  Skills,
  Projects,
  Footer,
} from "./components";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="app">
      <Header matches={matches} />
      <About matches={matches} />
      <Skills matches={matches} />
      <Projects matches={matches} />
      <Personal matches={matches} />
      <Education matches={matches} />
      <Footer matches={matches} />
    </div>
  );
};

export default App;
