import { Breadcrumb, Button,Theme,Tile } from '@carbon/react';
import Navbar from './components/Navbar';
import Breadcrumps from './components/Breadcrumps';
import { Route,Routes } from 'react-router-dom';
import ModulePage from './Pages/ModulePage';

function App() {
  return (
    <>
    <Navbar/>

   <div style={{marginTop:"50px",borderBottom:"1px solid #262626",padding:"5px"}}>
     <Breadcrumps/>
   </div>
   <Routes>
    <Route path='/' element={<ModulePage/>}/>
   </Routes>
  
  
 
    </>
  );
}

export default App;