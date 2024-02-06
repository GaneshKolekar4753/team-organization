import "./App.css";
import { Company } from "./components/Company";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Role } from "./components/Role";

import {teamsData} from './assets/teamsData'

function App() {
console.log(teamsData)
  return (
    <div className="App">
      <Header />
      <Company />
      <div id="team">
        {teamsData.map((team, index) => {
          return (
            <Role
              key={index}
              index={index}
              roleName={team.roleName}
              employees={team.employees}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
