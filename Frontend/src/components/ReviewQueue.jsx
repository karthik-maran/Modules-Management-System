import { Button } from "@carbon/react";
import { WarningFilled,CheckmarkFilled } from "@carbon/icons-react";
import "@carbon/styles/css/styles.css"
import "../styles/reviewComponent.css"


function ReviewQueueComponent({setReviewStatus}){
    return(
        <> <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h1>Review Queue</h1>
                <div className="summary-container">
                    <div>
                    <p>Review Summary</p>
                    <h6>4 modules under review</h6>
                    </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <WarningFilled  className="text-yellow-500"/>
                        <h1>1</h1>
                    </div>

                <div className="flex items-center gap-2">
                     <CheckmarkFilled className="text-green-500" />
                        <h1>2</h1>
                    </div>
                </div>

                </div>
            </div>
            <div className="flex h-10  ">
                <Button 
                className="submit-btn"
                title="Submitted"
                onClick={()=>setReviewStatus("Pending")}
                >
                Pending
                </Button>
                <Button 
                title="Needs Changes"
                className="change-btn"
                onClick={()=>setReviewStatus("Needs Changes")}>
                Needs Change
                </Button>
                <Button title="Approved"
                className="approve-btn"
                onClick={()=>setReviewStatus("Approved")}>
                Approved
                </Button>
            </div>
            </div>
           
        </>
    )
}
export default ReviewQueueComponent;