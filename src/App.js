import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Particals from "react-particles-js";
import AboutMe from "./components/AboutMe"
function App() {
  return (
    <>
    <Particals
    className="particles-canvas"
    params={{
      particles:{
        number: {
          value: 30,
        density:{
          enable:true,
          value_area: 900
        }
      },
      shape:{
        type:"circle",
        stroke:{
          width: 4,
          color:"#0055ff"
        }
      }
      }
    }}
    />

<Navbar/>
   <Header/>
   <AboutMe/>
   
   </>
  );
}

export default App;
