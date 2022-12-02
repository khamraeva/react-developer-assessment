import AuthorComponent from './AuthorComponent';
import Summary from './Summary';
import Categories from './Categories';
import { ICard } from './Interface/Interface';
import { ReactElement } from 'react';

export default function PostCard({ card }: ICard): ReactElement<ICard> {
  const { author, categories, publishDate } = card;
  return (
    <div className='card'>
      <AuthorComponent author={author} publishDate={publishDate}/>
      <Summary info={card}/>
      <Categories categories={categories}/>
    </div>
  );
}