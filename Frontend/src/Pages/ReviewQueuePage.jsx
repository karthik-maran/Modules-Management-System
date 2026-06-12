import Breadcrumps from "../components/Breadcrumps";
import ReviewQueueComponent from "../components/ReviewQueue";
import ReviewModuleList from "../components/ReviewModules";
import { Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

function ReviewQueuePage(){
    const [reviewStatus,setReviewStatus] = useState("Pending");
    const {revCount} = useContext(DataContext)
  
    return(
        <>

        <div style={{padding:"20px",backgroundColor:"white"}}>
            <ReviewQueueComponent setReviewStatus={setReviewStatus} />
        </div>
        <div style={{marginLeft:"20px", display:"flex",padding:"10px"}}>
           <p>Pending: {revCount.pending} | Needs Changes: {revCount.needsChanges}| Approved: {revCount.approved} </p>
         
        </div>
        <div style={{backgroundColor:"white",marginLeft:"20px",marginRight:"20px"}}>
            <Layer>
            <ReviewModuleList reviewStatus={reviewStatus} />
            </Layer>
        </div>
       
        </>
    )
}
export default ReviewQueuePage;