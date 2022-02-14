import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import CbbRegion from './components/cbbRegion.js';
import CbbCiudad from './components/cbbCiudad.js';



function App() {
  return (
    <div className="App">
      <div id="superior">soy un div superior</div>
     <Button></Button>
      <CbbRegion></CbbRegion>
      <CbbCiudad></CbbCiudad>
    </div>
   
  );
}

export default App;
