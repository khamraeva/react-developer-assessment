import { ReactElement } from 'react';

interface FilterItemProps {
  filter?: string,
  handler: (string: string) => void;
}

export default function FilterItem({filter = '', handler}: FilterItemProps): ReactElement<FilterItemProps>  {
  const classNames = filter ? 'filter' : 'clear-filters';
  return (
    <span className={classNames} onClick={() => handler(filter)}>{filter || 'Clear filters'}</span>
  );
}