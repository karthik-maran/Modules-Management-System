import {
  Accordion,
  AccordionItem
} from "@carbon/react";
import {Close} from "@carbon/icons-react"

function FilterPanel({setShowFilter}) {
  return (
    <div>
    <div className="min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center h-15 p-2">
          <h4>Filter</h4>
         <Close size={20}
                onClick={() => setShowFilter(false)}
                style={{ cursor: "pointer" }}/>
        </div>
      </div>
    <div className="flex gap-10">
      <Accordion>
        <AccordionItem title="Collaborators">
          Content
        </AccordionItem>

        <AccordionItem title="Created on">
          Content
        </AccordionItem>

        <AccordionItem title="Category">
          Content
        </AccordionItem>

        <AccordionItem title="Tags">
          Content
        </AccordionItem>
      </Accordion>
    </div>
      <div className="mt-auto p-4 border-t h-10">
        Reset Filters
      </div>
    </div>
    </div>
  );
}

export default FilterPanel;