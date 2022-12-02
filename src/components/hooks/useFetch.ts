import { useEffect, useState } from 'react';
import { IPost } from '../Interface/Interface';

export default function useFetch(): IPost[] {
  const [data, setData] = useState<IPost[]>([]);
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch(`/api/posts`);
        const { posts } = await res.json();
        setData(posts);
      } catch(err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return data;
}