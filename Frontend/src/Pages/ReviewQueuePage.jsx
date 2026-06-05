import Breadcrumps from "../components/Breadcrumps";
import ReviewQueueComponent from "../components/ReviewQueue";
import ReviewModuleList from "../components/ReviewModules";
import { Layer } from "@carbon/react";
import ListModudle from "../components/ListModule";

function ReviewQueuePage(){
    return(
        <>

        <div style={{padding:"20px",backgroundColor:"white"}}>
            <ReviewQueueComponent/>
        </div>
        <div style={{backgroundColor:"white"}}>
            <Layer>
            <ListModudle/>
            </Layer>
        </div>
       
        </>
    )
}
export default ReviewQueuePage;