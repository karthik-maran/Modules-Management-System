import {
  Modal,
  TextInput,
  Dropdown,
  TextArea,
  Button,
  Tag
} from "@carbon/react";
import axios from "axios";
import {dropdownData} from "../data/sampleData"
import '@carbon/styles/css/styles.css';
import "../styles/createModule.css"
import { useState } from "react";
import API_URL from "../../config/config";


function CreateModule({ open, onClose }){
    const [moduleName,setModuleName] = useState("");
    const [program, setProgram] = useState("");
    const [category, setCategory] = useState("");
    const [target,setTarget] = useState("");
    const [service,setService] = useState("");
    const[summary,setSummary] = useState("");
    const[input,setInput] = useState("");
    const[tags,setTags] = useState([]);
    const saveModule = async (status)=>{
        const moduleData = {
            moduleName:moduleName,
            programName:program,
            categoryName:category,
            tagGroup:target,
            serviceName:service,
            moduleSummary:summary,
            status:status,
            tags:tags
            
        };
        try {
            const response = await axios.post(`${API_URL}/api/module`,moduleData)
            console.log(response.data);
            alert("data saved successfully")
        } catch (error) {
            alert('failed to save')
         console.error(error);   
        }
    }
    
    const handleKeyDown =(e) => {
        if(e.key==="Enter" && input.trim()){
            e.preventDefault();
            setTags([...tags,input.trim()]);
            setInput("");
        };
    }

        const removeTag =(tagToRemove) =>{
            setTags(tags.filter(tag=> tag!==tagToRemove));
        }
    
    return(
    <div className="overflow">
    <Modal
       open={open}
        modalHeading="Add Modules"
        subtitle="Create a new module with its details, content, and organization settings."
        primaryButtonText="Create & Open"
        secondaryButtonText="Save Draft"
        className="right-modal"
        onRequestSubmit={()=>saveModule("Active")}
       onRequestClose={onClose}
       onSecondarySubmit={()=>saveModule("Draft")}

    >
         <p style={{ marginBottom: "1rem" }}>Create a new module with its details, content, and organization settings.</p>
    <div className="flex flex-col gap-5">
      <TextInput
        id="module-name"
        labelText="Module Name"
        placeholder="Module Name"
        onChange={(e) =>setModuleName(e.target.value)}
      />

      <Dropdown
        id="program"
        titleText="Program"
        label="Select Program"
        items={Object.keys(dropdownData)}
        selectedItem={program}
        onChange={({selectedItem}) =>{setProgram(selectedItem),setCategory("")}}
      />
      
  

      <Dropdown
        id="category"
        titleText="Category"
        label="Select Category"
        items={ program ? Object.keys(dropdownData[program].categories):[] }
        selectedItem={category}
        onChange={({selectedItem})=>{setCategory(selectedItem),setTarget("")}}
      />

      <Dropdown
        id="tag-group"
        titleText="Tag Group"
        label="Select a group"
        items={  dropdownData?.[program]?.categories?.[category]?.tagGroups ? Object.keys(dropdownData[program].categories[category].tagGroups)
    : []}
        selectedItem={target}
        onChange={({selectedItem}) =>{setTarget(selectedItem),setService("")}}
      />

      <Dropdown
        id="service"
        titleText="Service Component"
        label="Service Component"
        items={  dropdownData?.[program]?.services
    ? Object.keys(dropdownData[program].services)
    : dropdownData?.[program]?.categories?.[category]?.services
      ? Object.keys(
          dropdownData[program]
            .categories[category]
            .services
        )
      : []}
      selectedItem={service}
      onChange={({selectedItem})=>{setService(selectedItem)}}
      />
    <div>
      <TextArea
        id="purpose"
        labelText="Module Summary"
        placeholder="Add a short overview of the module purpose"
        onChange={(e)=>setSummary(e.target.value)}
    
      />
       <label
            htmlFor="tags"
            className="cds--label">
             Add a rough idea. Zendy Ai can refine it.</label>
      </div>
      <div>
      <label
            htmlFor="tags"
            className="cds--label">
             Tags (Optional)</label>
     <div className="tag-input-container">
        {tags.map((tag) => (
    <Tag
      key={tag}
      filter
      onClose={() => removeTag(tag)}
    >
      {tag}
    </Tag>
  ))}
  

  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={handleKeyDown}
    className="tag-input"
    placeholder="Add tags"
  />
 </div>
 </div>
 </div>
     
    </Modal>
    </div>
    )
}

export default CreateModule;