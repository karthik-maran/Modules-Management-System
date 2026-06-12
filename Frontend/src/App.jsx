import { Breadcrumb, Button,Theme,Tile } from '@carbon/react';
import Navbar from './components/Navbar';
import Breadcrumps from './components/Breadcrumps';
import { Route,Routes } from 'react-router-dom';
import ModulePage from './Pages/ModulePage';
import ReviewQueuePage from './Pages/ReviewQueuePage';
import ModuleEditorPage from './Pages/EditModulePage';
import DataContext from './context/DataContext';
import { useState } from 'react';

function App() {
  const [modCount,setModCount] = useState({live:0,draft:0})
     const [revCount, setRevCount] = useState({
    pending: 0,
    approved: 0,
    needsChanges: 0
    });
  return (
    <>
      <Navbar/>
    <DataContext.Provider value={{modCount,setModCount,revCount,setRevCount}}>
   <div style={{marginTop:"50px",borderBottom:"1px solid #c3bbbb",padding:"5px",backgroundColor:"white"}}>
     <Breadcrumps/>
   </div>
   <Routes>
   
    <Route path='/' element={<ModulePage/>}/>
    <Route path='/review' element={<ReviewQueuePage/>}/>
    <Route path='/edit/:moduleId' element={<ModuleEditorPage/>}/>
    
   </Routes>
   </DataContext.Provider>
  
  
 
    </>
  );
}

export default App;