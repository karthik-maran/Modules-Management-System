import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { useLocation, Link } from "react-router-dom";


function Breadcrumps(){
    const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);
    return(
       
        <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <BreadcrumbItem key={to} isCurrentPage={isLast}>
            {isLast ? (
              value.charAt(0).toUpperCase() + value.slice(1)
            ) : (
              <Link to={to}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
    )
}

export default Breadcrumps;