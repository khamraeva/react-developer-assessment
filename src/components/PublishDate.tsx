import { ReactElement } from 'react';

interface PublishDateProps {
  publishDate: string
}

export default function PublishDate({publishDate}: PublishDateProps): ReactElement<PublishDateProps> {
  const date = new Date(publishDate).toLocaleDateString();
  return (
    <small>{date}</small>
  );
}