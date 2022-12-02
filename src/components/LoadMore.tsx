import { ReactElement } from 'react';

interface LoadMoreProps {
  handler: () => void
}

export default function LoadMore({handler}: LoadMoreProps): ReactElement<LoadMoreProps> {
  return (
    <button className='button' onClick={handler}>Load more</button>
  );
}