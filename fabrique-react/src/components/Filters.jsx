import React, { useState } from 'react';
import './Filters.css'
function Filters() {
    const [filterText, setFilterText] = useState('');

    const handleInputChange = (event) => {
        setFilterText(event.target.value);
    };
return (
<>
<div className="filteredList">
	<button className="filter-option" data-filter="*" tabIndex="0">All objects</button>
	<button className="filter-option" data-filter="Pottery" tabIndex="0">Pottery</button>
	<button className="filter-option" data-filter="Islamic art" tabIndex="0">Islamic art</button>
	<button className="filter-option" data-filter="Tapestry" tabIndex="0">Tapestry</button>
	<button className="filter-option" data-filter="Glass" tabIndex="0">Glass</button>
</div>

<div className="wrap">
	<div className="search">
		<input
			type="text"
			className="searchTerm"
			value={filterText}
            onChange={handleInputChange}
			placeholder="Search the collection"
		/>
		<button type="submit" className="searchButton" aria-label="Submit search">
{/* search SVG */}
		</button>
	</div>
</div>
</>
)
}