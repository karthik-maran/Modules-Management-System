import { 
    Modal,
    TextInput,
    Dropdown,
    TextArea,
    Button,
    Tag

 } from "@carbon/react";
 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";

import {dropdownData} from "../data/sampleData"
import '@carbon/styles/css/styles.css';
import "../styles/moduleEditor.css"
import axios from "axios";
import API_URL from "../../config/config";
import { useNavigate } from "react-router-dom";



function ModuleEditor(){
        const {moduleId} = useParams();
        const [moduleName,setModuleName] = useState("");
        const [program, setProgram] = useState("");
        const [category, setCategory] = useState("");
        const [target,setTarget] = useState("");
        const [service,setService] = useState("");
        const[summary,setSummary] = useState("");
        const[input,setInput] = useState("");
        const[tags,setTags] = useState([]);
        const[mod, setMod] = useState(null);
        const navigate = useNavigate();
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
    useEffect(() => {
    const loadModuleInfo = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/edit/${moduleId}`);
            console.log("ID:", moduleId);

            setMod(response.data.fetchModule);

            setModuleName(response.data.fetchModule.moduleName);
            setProgram(response.data.fetchModule.programName);
            setCategory(response.data.fetchModule.categoryName);
            setTarget(response.data.fetchModule.tagGroup);
            setService(response.data.fetchModule.serviceName);
            setSummary(response.data.fetchModule.moduleSummary);
            setTags(response.data.fetchModule.tags || []);

        } catch (error) {
            console.error(error);
        }
    }
    loadModuleInfo();
}, [moduleId]);
function handleNavigate(){
    navigate("/")
}

async function handleSave(moduleId){
    try {
        const newData = {
            moduleName,
            programName: program,
            categoryName: category,
            tagGroup: target,
            serviceName: service,
            moduleSummary: summary,
            tags
        };
        const response = await axios.put(`${API_URL}/api/edit/${moduleId}`,  {
            moduleName,
            programName: program,
            categoryName: category,
            tagGroup: target,
            serviceName: service,
            moduleSummary: summary,
            tags
        });
        console.log(response.data)
        alert('Module Updated sucessfully');
    } catch (error) {
        console.error(error);
        alert("failed to update");
        
    }
    
}




    
    return(
        <>
       
      
    <div className="flex justify-center items-center ">
  
    <div style={{padding:"40px"}} className="flex flex-col w-full gap-10  shadow-md ">
      <TextInput
        id="module-name"
        labelText="Module Name"
        placeholder="Module Name"
        value={moduleName}
        onChange={(e) =>setModuleName(e.target.value)}
      />
    <div  className="flex  gap-10">
    <div className="w-screen">
      <Dropdown
        id="program"
        titleText="Program"
        label="Select Program"
        value={program}
        items={Object.keys(dropdownData)}
        selectedItem={program}
        onChange={({selectedItem}) =>{setProgram(selectedItem),setCategory("")}}
      />
      </div>
  

    <div className="w-screen">
      <Dropdown
        id="category"
        titleText="Category"
        label="Select Category"
        value={category}
        items={ program ? Object.keys(dropdownData[program].categories):[] }
        selectedItem={category}
        onChange={({selectedItem})=>{setCategory(selectedItem),setTarget("")}}
      />
      </div>
    </div>

    <div className="flex gap-10">
        <div className="w-screen">
      <Dropdown
        id="tag-group"
        titleText="Tag Group"
        label="Select a group"
        value={target}
        items={  dropdownData?.[program]?.categories?.[category]?.tagGroups ? Object.keys(dropdownData[program].categories[category].tagGroups)
    : []}
        selectedItem={target}
        onChange={({selectedItem}) =>{setTarget(selectedItem),setService("")}}
      />
      </div>
    <div className="w-screen">
      <Dropdown
        id="service"
        titleText="Service Component"
        label="Service Component"
        value={service}
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
      </div>
      </div>
    <div>
      <TextArea
        id="purpose"
        labelText="Module Summary"
        value={summary}
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
      value={tags}
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
  <div className="flex justify-center text-center gap-10">
    
    <Button>Cancel</Button>
    <Button onClick={()=>{handleSave(moduleId);handleNavigate();}}>save</Button>
 </div>
 </div>

</div>
        </>
    )
}

export default ModuleEditor;