import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Particals from "react-particles-js";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
function App() {
  return (
    <>
    <Particals
    className="particles-canvas"
    params={{
      particles:{
        number: {
          value: 50,
        density:{
          enable:true,
          value_area: 949
        }
      },
      shape:{
        type:"triangle",
        stroke:{
          width: 2,
          color:"#0055ff"
        }
      }
      }
    }}
    />

<Navbar/>
   <Header/>
   <AboutMe/>
   <Services/>
   
   </>
  );
}

export default App;
