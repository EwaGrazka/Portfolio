import { Route, HashRouter } from "react-router-dom";
import Choice from "./pages/Choice/Choice.page";
import Contact from "./pages/Contact/Contact.page";
import Projects from "./pages/Projects/Projects.page";
import Skills from "./pages/Skills/Skills.page";
import HardSkills from "./pages/HardSkills/HardSkills";
import SoftSkills from "./pages/SoftSkills/SoftSkills";

function App() {
  return (
    <HashRouter>
      <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      <Route
        exact
        path="/projects"
        render={(props) => <Projects {...props} />}
      />
      <Route exact path="/skills" render={(props) => <Skills {...props} />} />
      <Route
        exact
        path="/hard-skills"
        render={(props) => <HardSkills {...props} />}
      />
      <Route
        exact
        path="/soft-skills"
        render={(props) => <SoftSkills {...props} />}
      />

      <Route exact path="/" render={(props) => <Choice {...props} />} />
    </HashRouter>
  );
}

export default App;
