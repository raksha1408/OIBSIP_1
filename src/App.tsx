import './App.css';
import Calculator from './component/calculator';
import Navbar from './component/Navbar';
import image from './assets/cal.jpg';
import { LightModeProvider } from './component/lightModeContext';

export default function App() {
  
  return (
    <div>
    <div style={{ backgroundImage:`url(${image})`}}>
  </div>
    <Navbar /><div className="App">

      <LightModeProvider>

        <Calculator />
      </LightModeProvider>
      </div>
    
  </div>
  );
}
