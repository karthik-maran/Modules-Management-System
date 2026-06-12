import { Button,ContentSwitcher,Switch} from "@carbon/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateModule from "../components/CreateModule";
import "@carbon/styles/css/styles.css"
import "../styles/module.css"

function ModuleComponent(){
    const navigate = useNavigate();
    function handleNavigate(){
        navigate('/review')
    }
    const[open,setOpen] = useState(false);
    return(
        <>
        <div className="flex justify-between items-center  ">
            <div className="flex flex-col gap-5">
                <h1>Modules</h1>
            <div style={{width:"300px"}}>
                <ContentSwitcher>
                  <Switch name="one" text="Module"></Switch>
                  <Switch name="two" text="My Module"></Switch>
                </ContentSwitcher>
            </div>
          
            </div>
            <div className="flex gap-3 text-center ">
                <Button style={{backgroundColor:"black"}} onClick={handleNavigate} >Review Queue</Button>
                <Button className="add-mod-btn" onClick={()=>setOpen(true)}>Create Modules +</Button>
            </div>
         
        </div>
        <CreateModule open={open} onClose={() => setOpen(false)}/>
       </>
        
      
    )
}
export default ModuleComponent;