/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { IShowCount } from '../Interface/Interface';

interface PaginationData extends IShowCount {
  initialShowCount: number
}

export default function usePagination(): PaginationData {
  // 10 values are shown by default
  const initialShowCount = 10;
  const [ showCount, useShowCount ] = useState<number>(initialShowCount);
  // show count option increases after 'Load more' button clicked
  const increaseShowAmount = () => useShowCount((prev: number) => prev + 10);

  return { showCount, useShowCount, increaseShowAmount, initialShowCount }
}