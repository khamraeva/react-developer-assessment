import { ReactElement } from 'react';
import { IPost } from './Interface/Interface';

interface SummaryProps {
  info: IPost
}

export default function Summary({info}: SummaryProps): ReactElement<SummaryProps> {
  const { title, summary } = info;
  return (
    <>
      <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
      <div>{summary}</div>
    </>
  );
}