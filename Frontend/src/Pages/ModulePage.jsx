import ModuleComponent from "../components/ModuleComponent";
import { Theme,Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";

import '@carbon/styles/css/styles.css';
import "../styles/module.css"
import { useContext } from "react";
import DataContext from "../context/DataContext";
function ModulePage(){
    const{modCount} = useContext(DataContext);
    return(
       <>
       <div style={{padding:"20px",backgroundColor:"white"}}>
        <Layer>
             <ModuleComponent/>

        </Layer>
        </div>
        <div style={{marginLeft:"20px", display:"flex",padding:"10px"}}>
           <p>live Module: {modCount.live} | draft module: {modCount.draft}</p>
         
        </div>
    

        <div style={{backgroundColor:"white" ,marginLeft:"20px",marginRight:"20px"}}>
            <Layer>
             <ListModudle/>
            </Layer>
        </div>
           
       </>
        
    )
}
export default ModulePage;