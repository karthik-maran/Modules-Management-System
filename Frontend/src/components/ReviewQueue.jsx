import { Button ,ContentSwitcher,Switch} from "@carbon/react";
import { WarningFilled,CheckmarkFilled } from "@carbon/icons-react";
import "@carbon/styles/css/styles.css"
import "../styles/reviewComponent.css"
import { useContext } from "react";
import DataContext from "../../dataContext";


function ReviewQueueComponent({setReviewStatus}){
    const{revCount} = useContext(DataContext)
    return(
        <> <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <h1>Review Queue</h1>
                <div className="summary-container">
                    <div>
                    <p>Review Summary</p>
                    <h6>{revCount.pending + revCount.needsChanges} modules under review</h6>
                    </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <WarningFilled  className="text-yellow-500"/>
                        <h1>{revCount.needsChanges}</h1>
                    </div>

                <div className="flex items-center gap-2">
                     <CheckmarkFilled className="text-green-500" />
                        <h1>{revCount.approved}</h1>
                    </div>
                </div>

                </div>
            </div>
            <div style={{width:"400px"}}>
                <ContentSwitcher
                 onChange={({ name }) => {
                                if (name === "one") {
                                 setReviewStatus("Pending");
                                } else if (name === "two") {
                                setReviewStatus("Needs Changes");
                                } else if (name === "three") {
                                setReviewStatus("Approved");
                                 }
                                }}>
                    <Switch name="one" text="Pending" ></Switch>
                    <Switch name="two" text="Needs Changes"></Switch>
                    <Switch name="three" text="Approved"></Switch>
                </ContentSwitcher>

            </div>
            </div>
           
        </>
    )
}
export default ReviewQueueComponent;