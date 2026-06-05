import {
  Accordion,
  AccordionItem,
  Checkbox
} from "@carbon/react";
import { Close } from "@carbon/icons-react";

function FilterPanel({
  data,
  setShowFilter,
  filters,
  setFilters
}) {
  const authors = [...new Set(data.map(m => m.authorName))];
  const categories = [...new Set(data.map(m => m.categoryName))];

  const tags = [
    ...new Set(
      data.flatMap(m => m.tags || [])
    )
  ];

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h4>Filters</h4>

          <Close
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => setShowFilter(false)}
          />
        </div>
      </div>

      <Accordion>
        <AccordionItem title="Collaborators">
          {authors.map(author => (
            <Checkbox
              key={author}
              id={author}
              labelText={author}
              checked={filters.authors.includes(author)}
              onChange={() =>
                handleFilterChange("authors", author)
              }
            />
          ))}
        </AccordionItem>

        <AccordionItem title="Category">
          {categories.map(category => (
            <Checkbox
              key={category}
              id={category}
              labelText={category}
              checked={filters.categories.includes(category)}
              onChange={() =>
                handleFilterChange(
                  "categories",
                  category
                )
              }
            />
          ))}
        </AccordionItem>

        <AccordionItem title="Tags">
          {tags.map(tag => (
            <Checkbox
              key={tag}
              id={tag}
              labelText={tag}
              checked={filters.tags.includes(tag)}
              onChange={() =>
                handleFilterChange("tags", tag)
              }
            />
          ))}
        </AccordionItem>
      </Accordion>

      <div
        className="mt-auto p-4 border-t cursor-pointer"
        onClick={() =>
          setFilters({
            authors: [],
            categories: [],
            tags: []
          })
        }
      >
        Reset Filters
      </div>
    </div>
  );
}

export default FilterPanel;