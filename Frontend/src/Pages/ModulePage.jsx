import ModuleComponent from "../components/ModuleComponent";
import { Theme,Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";
import '@carbon/styles/css/styles.css';
import "../styles/module.css"
function ModulePage(){
    return(
       <>
       <div style={{padding:"10px"}}>
        <Layer>
                <ModuleComponent/>
               
        </Layer>
        </div>
     
        <div>
            <Layer>
                <ListModudle/>
            </Layer>
        </div>
           
       </>
        
    )
}
export default ModulePage;