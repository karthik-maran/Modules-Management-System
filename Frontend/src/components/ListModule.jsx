import{rows,headers} from "../data/sampleData"
import FilterPanel from "../components/FilterPanel"
import ViewModule from "../components/ViewModule";
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  Search,
  Dropdown,
  Button,
  OverflowMenu,
  OverflowMenuItem
} from "@carbon/react";

import {
  Filter,
  Renew,
  ChevronRight,
  ChevronDown,
  CheckmarkFilled,
   OverflowMenuHorizontal,
   OverflowMenuVertical
} from "@carbon/icons-react";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config/config";



function ListModudle(){

    
    const [showFilter, setShowFilter] = useState(false);
    const [data, setData ] = useState([]);
    const [activeCount,setActiveCount] = useState(0);
    const[draftCount,setDraftCount] =  useState(0)
    const[expandedRows,setExpandedRows] = useState({});
    const[selectedModule,setSelectedModule] = useState(null)
    const [showPanel, setShowPanel] = useState(false);
    const toggleRow = (moduleId) => {
    setExpandedRows((prev) => ({
    ...prev,
    [moduleId]: !prev[moduleId]
    }));
    };

    useEffect(()=>{
        const fetchModule = async ()=>{
            try {
                const response = await axios.get(`${API_URL}/api/module`)
                setData(response.data.allModule);
                console.log(response.data.allModule);
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchModule();
    },[])
    return(
       
    <>
  
    <div style={{marginTop:"50px"}}>
        <div className="flex justify-between  h-10 gap-3 p-2 items-center">
        <div className="flex gap-5 items-center ">
        <div >
           <Button
        kind="ghost"
        renderIcon={Filter}
        iconDescription="Filter" onClick={()=>setShowFilter(!showFilter)}/>

        </div>
      
        
        <div className="w-50">
        <Dropdown  label="All Programs" items={[
          "All Programs",
          "Mind Matters",
          "Mind Matters Jr."
        ]} size="sm"/>
        
        </div>
        <div className="w-200">
             <Search placeholder="Find module by name, author or category"/>
        </div>
        </div>
        <div>
          <Button
        kind="ghost"
        renderIcon={Renew}
        iconDescription="Refresh"
      />
       </div>
        </div>
        <div className="flex">
        
              {showFilter && (
                <div className="w-70 min-h-screen border-r bg-white">
                <FilterPanel setShowFilter={setShowFilter}/>
                </div>
             )}
    <div className="flex-1">
        <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps }) => (
        <TableContainer title="">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader
                    key={header.key}
                    {...getHeaderProps({ header })}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>

           <TableBody>
  {data.map((module) => (
    <>
    <TableRow key={module.moduleId}>
        <TableCell>
    <div className="flex items-center gap-3">
      <button size={16} onClick={()=>toggleRow(module.moduleId)}>
          {expandedRows[module.moduleId] ? <ChevronDown/> : <ChevronRight/>}
      </button>
      <span className=" hover:text-blue-500 hover:underline cursor-pointer" onClick={()=>{setSelectedModule(module);setShowPanel(true)}}>
        {module.moduleName}
      </span>
    </div>
  </TableCell>
        <TableCell>{module.authorName}</TableCell>
      <TableCell>{module.programName}</TableCell>
      <TableCell>
  <div className="flex items-center gap-2">
    {module.status === "Active" ? (
      <>
        <CheckmarkFilled size={20} className="text-green-600" />
        <span>Active</span>
       
      </>
    ) : (
      <>
        <OverflowMenuHorizontal size={20} className="text-gray-400" />
        <span>Draft</span>
    
      </>
    )}
  </div>
</TableCell>
      <TableCell>{module.createdDate?.split('T')[0]}</TableCell>
     <TableCell>
  <OverflowMenu flipped>
    <OverflowMenuItem
      itemText="Approved"
      onClick={() => updateStatus(module.moduleId, "Approved")}
    />

    <OverflowMenuItem
      itemText="Pending"
      onClick={() => updateStatus(module.moduleId, "Pending")}
    />

    <OverflowMenuItem
      itemText="Needs Changes"
      onClick={() => updateStatus(module.moduleId, "Needs Changes")}
    />

  </OverflowMenu>
</TableCell>
    </TableRow>
    
      {expandedRows[module.moduleId] && (
        <TableRow>
          <TableCell colSpan={6}>
            <div style={{width:""}} className=" flex justify-between   gap-30 items-center bg-gradient-to-t from-blue-50 to-white-100 "  >
              <div className="w-100 whitespace-wrap">
                <strong>Generated Summary:</strong>
                <p>{module.moduleSummary}</p>
              </div>
            <div className="flex flex-col gap-3 w-80" >
              <div className="mt-2">
                <strong>Category:</strong> {module.categoryName}
              </div>

              <div>
                <strong>Target Group:</strong> {module.tagGroup}
              </div>
              </div>

              <div className="flex w-100" >
                <strong>Tags:</strong>
                <div className="flex gap-3">
                {module.tags?.map((tag) => (
                  <span
                    key={tag}
                    className=" bg-blue-100 rounded-full ">
                    {tag}
                  </span>
                ))}
                </div>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    
    </>
  ))
  
   }
  
</TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
    </div>
    </div>
    </div>
    {showPanel && (
  <ViewModule
    module={selectedModule}
    onClose={() => setShowPanel(false)}
  />
    )}
    </>
    )
}

export default ListModudle;