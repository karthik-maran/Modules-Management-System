import {
  Modal,
  ModalHeader,
  ModalBody,
  Accordion,
  AccordionItem,
  Button,

} from "@carbon/react";
import { useNavigate,useParams } from "react-router-dom";
import '@carbon/styles/css/styles.css';
import "../styles/viewmodel.css"



import { Launch, Close } from "@carbon/icons-react";

function ViewModule({ module, onClose }){
    const navigate = useNavigate();
    function handleNavigate(){
    navigate(`/edit/${module.moduleId}`)
    }
    
    return(
        <>
    <Modal
      open={open}
      onRequestClose={onClose}
      open={open}
    onRequestClose={onClose}
    primaryButtonText="Open Module Editor"
    secondaryButtonText="Duplicate Module"
     onRequestSubmit={handleNavigate}
      className="right-side-model"
    >  <div style={{borderBottom:"1px solid black",padding:"5px"}}>
        <h1>{module.moduleName}</h1>
        </div>
      <div className="summary-heading">
        <h5 className="font-semibold mb-2">
          Summary
        </h5>

        <p>{module?.moduleSummary}</p>
      </div>
      <div className="flex flex-col gap-5px">
      <Accordion>
        <AccordionItem title="Module">
          Module Content
        </AccordionItem>

        <AccordionItem title="Facilitator Guide">
          Facilitator Guide Content
        </AccordionItem>
      </Accordion>
      </div>

      <div  className="flex flex-col ">
        
        <h5 className="font-semibold">
          Overview
        </h5>
        <div></div>
        <p>
          <strong>Publish Date:</strong>{" "}
          {module?.createdDate?.split("T")[0]}
        </p>

        <p>
          <strong>Author:</strong>{" "}
          {module?.authorName}
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {module?.categoryName}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {module?.status}
        </p>
      </div>


    </Modal>
      
        </>
    )
}

export default ViewModule;