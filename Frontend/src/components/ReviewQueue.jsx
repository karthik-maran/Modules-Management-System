import { Button } from "@carbon/react";
import { Warning,CheckmarkFilled } from "@carbon/icons-react";
import "@carbon/styles/css/styles.css"
import "../styles/reviewComponent.css"

function ReviewQueueComponent(){
    return(
        <> <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h1>Review Queue</h1>
                <div className="summary-container">
                    <div>
                    <p>Review Summary</p>
                    <h6>4 modules under review</h6>
                    </div>
                
                <div className="flex">
                   <div className="flex"> <Warning/> <h1>1</h1></div>
                   <div className="flex"> <CheckmarkFilled/><h1>2</h1></div>
                </div>
                </div>
            </div>
            <div className="flex h-10  ">
                <Button 
                className="submit-btn"
                title="Submitted"
                >
                Submitted
                </Button>
                <Button 
                title="Needs Changes"
                className="change-btn">
                Needs Change
                </Button>
                <Button title="Approved"
                className="approve-btn">
                Approved
                </Button>
            </div>
            </div>
           
        </>
    )
}
export default ReviewQueueComponent;