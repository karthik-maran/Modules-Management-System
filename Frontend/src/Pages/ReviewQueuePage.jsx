import Breadcrumps from "../components/Breadcrumps";
import ReviewQueueComponent from "../components/ReviewQueue";
import ReviewModuleList from "../components/ReviewModules";
import { Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";
import { useState } from "react";

function ReviewQueuePage(){
    const [reviewStatus,setReviewStatus] = useState("Pending");
    const [counts, setCounts] = useState({
    pending: 0,
    approved: 0,
    needsChanges: 0
    });
    return(
        <>

        <div style={{padding:"20px",backgroundColor:"white"}}>
            <ReviewQueueComponent setReviewStatus={setReviewStatus} counts={counts}/>
        </div>
        <div style={{backgroundColor:"white"}}>
            <Layer>
            <ReviewModuleList reviewStatus={reviewStatus} setCounts={setCounts}/>
            </Layer>
        </div>
       
        </>
    )
}
export default ReviewQueuePage;