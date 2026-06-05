import{rows,headers} from "../data/sampleData"
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
  Button
} from "@carbon/react";

import {
  Filter,
  Renew
} from "@carbon/icons-react";

function ReviewModuleList(){
    return(
        <>
        <div style={{marginTop:"50px"}}>
        <div className="flex justify-between  h-10 gap-3 p-2 items-center">
        <div className="flex gap-5 items-center ">
        <div >
           <Button
        kind="ghost"
        renderIcon={Filter}
        iconDescription="Filter"/>

        </div>
      
        
        <div className="w-50">
        <Dropdown  label="All Programs" items={[
          "All Programs",
          "Mind Matters",
          "Mind Matters Jr."
        ]} size="sm"/>
        
        </div>
        <div className="w-200">
             <Search/>
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
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
    </div>
        </>
    )
}
export default ReviewModuleList