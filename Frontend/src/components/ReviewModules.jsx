import{rows,headers} from "../data/sampleData"
import axios from "axios";
import API_URL from "../../config/config";
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
  CheckmarkFilled,
  OverflowMenuHorizontal,
  WarningFilled
} from "@carbon/icons-react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import DataContext from "../../dataContext";

function ReviewModuleList({reviewStatus}){
  const[fetchData,setFetchData] = useState([]);
  const[showFilter, setShowFilter] = useState(false);
  const[showPanel,setShowPanel] = useState(false);
  const[expandedRows,setExpandedRows]= useState(false);
  const{setRevCount} = useContext(DataContext)
    useEffect(()=>{
      fetchStatus(reviewStatus),
      getMod()
    },[reviewStatus])

    async function fetchStatus(statusValue) {
      try {
        const response = await axios.get(`${API_URL}/api/status`,{params:{statusValue},})
        setFetchData(response.data.getReviewStatus);
        console.log(response.data)
      } catch (error) {
        console.error(error.message);
      }
      
    }
    async function getMod() {
      try {
        const response = await axios.get(`${API_URL}/api/module`)
        const mod = response.data.allModule;
           setRevCount({
                          pending: mod.filter(m => m.reviewStatus === "Pending").length,
                          needsChanges: mod.filter(m => m.reviewStatus === "Needs Changes").length,
                          approved: mod.filter(m => m.reviewStatus === "Approved").length
                          });
      } catch (error) {
        console.error(error)
        
      }
    }
 
    return(
        <>
       
    <div>
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
                <FilterPanel setShowFilter={setShowFilter} data={data}  filters={filters} setFilters={setFilters}/>
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
  {fetchData.map((module) => (
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
  {module.reviewStatus === "Approved" ? (
    <>
      <CheckmarkFilled size={20} className="text-green-600" />
      <span>Approved</span>
    </>
  ) : module.reviewStatus === "Pending" ? (
    <>
      <OverflowMenuHorizontal size={20} className="text-gray-400" />
      <span>Pending</span>
    </>
  ) : (
    <>
      <WarningFilled size={20} className="text-yellow-500" />
      <span>Needs Change</span>
    </>
  )}
</div>
</TableCell>
      <TableCell>{module.createdDate?.split('T')[0]}</TableCell>

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
    {showPanel && ( <ViewModule module={selectedModule} onClose={() => setShowPanel(false)}/>
    )}
        </>
    )
}
export default ReviewModuleList