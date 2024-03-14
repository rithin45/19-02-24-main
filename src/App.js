import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Adminpanel/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Plot from './Components/Plots/Plot';
import Plotdetails from './Components/Plots/Plotdetails';
import Build from './Components/Building/Build';
import Builddetails from './Components/Building/Builddetails';
import Userhomepage from './utils/Userhomepage';
import Plotview from './utils/Plotview';
import Buildingview from './utils/Buildingview';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>

    <Routes>

      <Route path={'/Home'}element={<Home />}></Route>
      <Route path={'/Ulog'}element={<Login/>}></Route>
      <Route path={'viewdetails'}element={<Plotdetails method='get'/>}></Route>
      <Route path='/Plot' element={<Plot method='post'/>}/>
      <Route path='/s'element={<Build method='post'/>}/>
      <Route path={'bdetails'}element={<Builddetails method='get'/>}></Route>
      <Route path={'/'} element={<Userhomepage/>}></Route>
      <Route path={'/pview'} element={<Plotview/>}></Route>
      <Route path={'/bview'} element={<Buildingview/>}></Route>


    </Routes>  
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;
