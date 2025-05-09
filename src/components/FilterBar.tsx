import React from 'react';

type FilterBarProps = {
  onFilterChange: (filter: 'all' | 'low' | 'medium' | 'high') => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('low')}>Low</button>
      <button onClick={() => onFilterChange('medium')}>Medium</button>
      <button onClick={() => onFilterChange('high')}>High</button>
    </div>
  );
};

export default FilterBar;
