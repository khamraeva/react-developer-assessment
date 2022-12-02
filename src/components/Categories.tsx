import { ICategory } from './Interface/Interface';
import { ReactElement } from 'react';

interface CategoriesProps {
  categories: ICategory[]
}

export default function Categories({ categories }: CategoriesProps): ReactElement<CategoriesProps>  {
  return (
    <div className='footer'>
      { categories.map((item: ICategory) => {
          return (<small className='category-list' key={item.id}>{item.name}</small>);
        })
      }
    </div>
  );
}