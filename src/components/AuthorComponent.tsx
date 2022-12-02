import PublishDate from './PublishDate';
import { ReactElement } from 'react';
import IAuthor from './Interface/Interface';

interface AuthorProps {
  author: IAuthor,
  publishDate: string
}

export default function AuthorComponent({author, publishDate}: AuthorProps): ReactElement<AuthorProps> {
  return (
    <div className='author'>
      <img className='avatar' src={author.avatar} alt='avatar'/>
      <div>
        <div>{author.name}</div>
        <PublishDate publishDate={publishDate}/>
      </div>
    </div>
  );
}