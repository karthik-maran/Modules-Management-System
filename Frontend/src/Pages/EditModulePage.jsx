import ModuleEditor from "../components/ModuleEditor";
import UpdateHead from "../components/UpdateHead";

function ModuleEditorPage(){
    return(
        <>
        <div style={{backgroundColor:"white",padding:"20px" }}>
            <div style={{backgroundColor:"white"}}> <UpdateHead/></div>
           
            <ModuleEditor/>
        </div>
        </>
    )
}

export default ModuleEditorPage;