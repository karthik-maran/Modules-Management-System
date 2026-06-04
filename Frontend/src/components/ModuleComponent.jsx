import { Button } from "@carbon/react";



function ModuleComponent(){
    return(
    
        <div className="flex justify-between items-center   ">
            <div ><h1>Modules</h1></div>
            <div className="flex gap-3 text-center ">
                <Button style={{backgroundColor:"black"}} >Review Queue</Button>
                <Button className="add-mod-btn">Create Modules +</Button>
            </div>
         
        </div>
       
        
      
    )
}
export default ModuleComponent;