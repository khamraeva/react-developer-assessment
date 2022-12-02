import { IPost, IPostlist } from './Interface/Interface';
import PostCard from './PostCard';
import { ReactElement } from 'react';

export default function PostList({ posts }: IPostlist): ReactElement<IPostlist> {
  return (
    <section className='wrapper'>
      { posts.map((item: IPost, i: number) => {
          return (
            <PostCard key={i} card={item}/>
          );
        })
      };
    </section>
  );
}