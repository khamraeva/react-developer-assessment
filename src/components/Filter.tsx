import { IPostlist, IPost, ICategory } from './Interface/Interface';
import { ReactElement } from 'react';
import FilterItem from './FilterItem';

interface FilterProps extends IPostlist {
  handler: (string: string) => void;
}

export default function Filter({ posts, handler }: FilterProps): ReactElement<FilterProps> {
  // to get a list of all categories they are merged into one array filtered by unique values
  const categories = posts.reduce((acc: Array<ICategory>, cur: IPost) => acc.concat(cur.categories), []);
  const categoryNames = categories.map((item: ICategory) => item.name);
  const filters = Array.from(new Set(categoryNames));
  const handleFilterClick = (filter: string): void => {
    handler(filter || '');
  }

  return(
    <section className='filters__block'>
      { filters.map((item: string, i: number) => <FilterItem filter={item} key={i} handler={handleFilterClick}/>) }
      <FilterItem handler={handleFilterClick}/>
    </section>
  );
}