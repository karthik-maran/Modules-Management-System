import ModuleComponent from "../components/ModuleComponent";
import { Theme,Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";
import '@carbon/styles/css/styles.css';
import "../styles/module.css"
function ModulePage(){
    return(
       <>
       <div style={{padding:"20px",backgroundColor:"white"}}>
        <Layer>
             <ModuleComponent/>

        </Layer>
        </div>
        <div style={{marginLeft:"20px", display:"flex",padding:"auto"}}>
            <p>line Module:1 | Draft Module:2</p>
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