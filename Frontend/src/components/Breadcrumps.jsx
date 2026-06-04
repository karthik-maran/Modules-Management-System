import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem
} from "@carbon/react";

function Breadcrumps(){
    return(
       
        <Breadcrumb>
            <BreadcrumbItem>
           BreadCrumps
            </BreadcrumbItem>

            <BreadcrumbItem>
            BreadCrumps
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                 Modules
            </BreadcrumbItem>
            </Breadcrumb>
            

    )
}

export default Breadcrumps;